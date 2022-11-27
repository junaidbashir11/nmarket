import React from 'react';
import {useState} from "react"
import {useAddress,useBalance,ThirdwebNftMedia,useContract,useUser} from "@thirdweb-dev/react"
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk"
import Header from '../components/header2';

const Wallet = () => {

let {user}=useUser()	
const { contract:marketplace } = useContract("0xeF75DaeCD0a7484B90E7Ba6B2C3Ee10ad0c5494f")
const bgImage = '/thirdweb.svg';
const [nfts,setNFTS]=useState("")
const [transactions,setTransactions]=useState("")
const [tokens,setTokens]=useState("")

const address=useAddress()
const balance=useBalance()
const [listingprice,setListingPrice]=useState("")

async function getNFTs(){

	let request=await fetch(`/api/nfts?address=${address}&chain=mumbai`,{
		method:"get",
		headers:{

			"content-type":"application/json"
		}
	})
	let response=await request.json()
	console.log(response)
 setNFTS(response)

}






async function getTransactions(){

	let request=await fetch(`/api/transactions?address=${address}&chain=mumbai`,{
		method:"get",
		headers:{

			"content-type":"application/json"
		}
	})
	let response=await request.json()
	console.log(response)
 setTransactions(response)

}
console.log(balance)


async function getTokens(){

	let request=await fetch(`/api/token2?address=${address}&chain=mumbai`,{
		method:"get",
		headers:{

			"content-type":"application/json"
		}
	})
	let response=await request.json()
	console.log(response)
 setTokens(response)

}





async function createListing1(id){
	const tx = await marketplace.direct.createListing({
		assetContractAddress:"0x03ea4b2F400ef807a4bBBef8E37D4CD72C249aEF",
		tokenId:String(id),
		startTimestamp: new Date(),
		listingDurationInSeconds:60 * 60 * 24 * 7,
		quantity: 1,
		currencyContractAddress: NATIVE_TOKEN_ADDRESS,
		buyoutPricePerToken:String(listingprice),
		});
		const receipt = tx.receipt; // the transaction receipt
		const listingId = tx.id;
		//console.log(listingId)


}


async function createListing2(id){
	const tx = await marketplace.direct.createListing({
		assetContractAddress:"0x1ab9044C60530B2D301489ABe7EaE4733bba3e85",
		tokenId:String(id),
		startTimestamp: new Date(),
		listingDurationInSeconds:60 * 60 * 24 * 7,
		quantity: 1,
		currencyContractAddress: NATIVE_TOKEN_ADDRESS,
		buyoutPricePerToken:String(listingprice),
		});
		const receipt = tx.receipt; // the transaction receipt
		const listingId = tx.id;
		//console.log(listingId)


}

	return (
		<div>
		
			<div className="">
				<Header></Header>
				 <h1>User : {user?.address}</h1>
      <h2 style={{color:"tomato"}}>{balance.data?.displayValue}</h2><i>{balance.data?.name}</i>
				
				<section className="">
					
					<div className="container">
						<div className="">
						    
											<button onClick={()=>getNFTs()} className="">nfts</button>
											<button onClick={()=>getTransactions()} className="">transactions</button>
											<button onClick={()=>getTokens()} className="">tokens</button>
						
						</div>
						{
						
						nfts !==""?
						
						<>
						{
						
						nfts.map(obj=>(
    <>
  <ThirdwebNftMedia
              key={obj.tokenId}
              metadata={obj.metadata}
              height={300}
              width={300}
            />
												  <div className="mb-6">
              <label
                htmlFor="item-name"
                className=""
              >
                Price<span className="text-red">*</span>
              </label>
              <input
                type="text"
                id="item price"
                className=""
                placeholder="Item price"
                onChange={(e)=>setListingPrice(e.target.value)}
                required
              />
            </div>
												{
												obj.contractType=="ERC721"?

												<>
													<button onClick={()=>createListing1(obj.tokenId)} className="">list erc721</button>
												</>
												:
												<>
													<button onClick={()=>createListing2(obj.tokenId)} className="">list erc1155</button>
												</>
												}
											
					</>
    
						))}
						 
						</>
						:
						<>
						
						</>
						
						
						}
					</div>
				</section>
			</div>
		</div>
	);
};

export default Wallet;
