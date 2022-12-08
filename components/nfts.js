import useSWR from "swr";
import {useState} from "react"
import {useAddress,useBalance,ThirdwebNftMedia,useContract,useUser} from "@thirdweb-dev/react"
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk"
import Image from "next/image";
import Header from "../components/header"
import styles from "../styles/Home.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function NFTS(props){

 let address=useAddress()

 const [listingprice,setListingPrice]=useState("")
 const [action,setAction]=useState(false)


 const { data, error } = useSWR(
  `/api/nfts?address=${props.address}&chain=${props.chain}`,
  fetcher
);

const { contract:marketplace } = useContract("0xeF75DaeCD0a7484B90E7Ba6B2C3Ee10ad0c5494f")

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



console.log(data)

if (error) return  "Please connect your wallet";
if (!data)  return "Loading...";
return (
	<>
	
	<button className="btn btn-primary" onClick={()=>setAction(true)}>Action</button>
<button onClick={()=>setAction(false)} className="btn btn-danger"><span>close</span></button>
  <div className="d-flex flex-row bd-highlight mb-3">


    		{data?.map(obj=>(

<div>

<div style={{width:"300px" ,height:"300px"}} className="alert alert-warning">
	<div className='card'>
  <div className="card-body">
  <div>

		<ThirdwebNftMedia metadata={obj.metadata}  className={styles.img}/>

		</div>

   </div>

												 


												{
												obj.contractType=="ERC721"?

												<>
												  {action==true?
														
														<>
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
														<button onClick={()=>createListing1(obj.tokenId)} className="">list erc721</button>
											
														</>
														:
														<></>
														
														}
													
												</>
												:
												<>

{action==true?
														
														<>
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
														<button onClick={()=>createListing2(obj.tokenId)} className="">list erc1155</button>
													
														</>
														:
														<></>
														
														}
												</>
												}
											

	</div>
</div>

</div>

						))}
  </div>
		</>
);


}