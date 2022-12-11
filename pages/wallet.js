import React from 'react';
import { useState } from "react"
import { useAddress, useBalance, ThirdwebNftMedia, useContract, useUser } from "@thirdweb-dev/react"
//import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk"
import Header from '../components/header';
import Footer from '../components/footer';
import NFTS from '../components/nfts';
import Transactions from '../components/transactions';
import Tokens from '../components/tokens';


const Wallet = () => {

	let { user } = useUser()
	const [networks,setNetworks]=useState("mumbai")
	const address=useAddress()
	const balance=useBalance()



	return (

		<div className=''  style={{"background-image":"url(/bc.jpeg)"}}>
			<Header></Header>
			<title>Wallet | Krypt</title>
			<div className="container">
			
				{/*User Component */}
				<div>
					
					<center>
					<section className="">
					<label style={{color:"white"}}>select network</label><br/>
						<select className="" onChange={(e)=>setNetworks(e.target.value)}>
        <option value="mumbai">Mumbai</option>
								<option value="ethereum mainnet">Ethereum Mainnet</option>
						</select>
						<div className="container">

							<div className="row">
							<div className="col">
								<h1 style={{color:"white"}}>NFTS</h1>
					
							<NFTS address={address} chain={networks} />

							</div>
							<div className="col">
								<h1 style={{color:"white"}}>Transanctions</h1>
								
								<Transactions address={address} chain={networks}/>
							</div>
							<div className="col">
								<h1 style={{color:"white"}}>Tokens</h1>
								<Tokens  address={address} chain={networks}/>
							</div>

						</div>


						</div>
					</section>
					</center>

				
				</div>
				<Footer></Footer>
			</div>
		</div>

	);
};

export default Wallet;
