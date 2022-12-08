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

		<div>
			<Header></Header>
			<title>Wallet | Krypt</title>
			<div className="container">
				<div style={{ "background-image": "url('https://www.imf.org/-/media/Images/IMF/FANDD/hero/2022/September/Allen-The-Superficial-Allure-Crypto.ashx') ", "height": "400px", "background-size": "cover" }}>
					<br></br>
					<center>
					<span style={{ "color": "white", "background-color": "black", "font-size": "30px", "padding": "20px", "border-radius": "20%" }}>Wallet</span>
					</center>

				</div>
				{/*User Component */}
				<div>
					<br></br>
					<h2 style={{ 'font-size': "25px" }}>User : {user?.address}</h2>

					<div className='container' style={{"color":"white"}}>
						<div className='row'>
						<div class="col-sm">
						<div className="card bg-primary">
							<div className="card-body text-center">
								<h2>Balance:</h2>
								<h2 className="card-text">{balance.data?.displayValue}</h2>
							</div>
						</div>
						</div>
						<div class="col-sm">
						<div className="card bg-primary">
							<div className="card-body text-center">
								<h2>Asset Name:</h2>
								<h2 className="card-text">{balance.data?.name}</h2>
							</div>
						</div>
					</div>
					</div>						
					</div>
					<br></br>

					<center>
					<section className="">
					<label>select network</label><br/>
						<select className="" onChange={(e)=>setNetworks(e.target.value)}>
        <option value="mumbai">Mumbai</option>
								<option value="ethereum mainnet">Ethereum Mainnet</option>
						</select>
						<div className="container">
							<div className="">
							<div className="row">
							<div className="col">
								<h1>NFTS</h1>
					
							<NFTS address={address} chain={networks} />

							</div>
							<div className="col">
								<h1>Transanctions</h1>
								<Transactions  address={address} chain={networks}/>
							</div>
							<div className="col">
								<h1>Tokens</h1>
								<Tokens  address={address} chain={networks}/>
							</div>

						</div>

								{/* <button style={{"font-size":"25px"}} className="btn btn-primary" onClick={() => getNFTs()}>NFT's</button> &nbsp;&nbsp;
								<button style={{"font-size":"25px"}} className="btn btn-primary" onClick={() => getTransactions()}>Transactions</button>&nbsp;&nbsp;
								<button style={{"font-size":"25px"}} className="btn btn-primary" onClick={() => getTokens()} >Tokens</button> */}

							</div>
						</div>
					</section>
					</center>


					{/*Assets Component */}
					<br></br>
					<div>
						<h2>Assets</h2>
						<table class="table table-hover">
							<thead>
								<tr>
									<th scope="col">Token</th>
									<th scope="col">Price</th>
									<th scope="col">Balance</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>0x18DdC01733B7490BF2b035956d33436E02E78EB6</td>
									<td>$0</td>
									<td>$0</td>
								</tr>
								<tr>
									<td>0x13DdC01733B7490BF2b035956d33436E02E78E56</td>
									<td>$0</td>
									<td>$0</td>
								</tr>
								<tr>
									<td>0x15DdC01733B7490BF2b035956d33436E02E78EC6</td>
									<td>$0</td>
									<td>$0</td>

								</tr>
							</tbody>

						</table>
					</div>


				</div>
				<Footer></Footer>
			</div>
		</div>

	);
};

export default Wallet;
