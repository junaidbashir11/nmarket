import React from 'react';
import { useState } from "react"
import { useAddress, useBalance, ThirdwebNftMedia, useContract, useUser } from "@thirdweb-dev/react"
//import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk"
import Header from '../components/header';
import Footer from '../components/footer';
import NFTS from '../components/nfts';
//import Transactions from '../components/transactions';
import Tokens from '../components/tokens';
import Transactions from '../components/transactions2';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
						</section>
</center>
						<Tabs>
    <TabList>
      <Tab  style={{color:"white",backgroundColor:"black"}}>NFTS</Tab>
      <Tab  style={{color:"white",backgroundColor:"black"}}>Transactions</Tab>
						<Tab  style={{color:"white",backgroundColor:"black"}}>Tokens</Tab>
    </TabList>

    <TabPanel>
					<center>

					<NFTS address={address} chain={networks} />
					</center>
   
    </TabPanel>
    <TabPanel>
    <center>
				<Transactions address={address} chain={networks}/>
					</center>  						
				
    </TabPanel>
				<TabPanel>
					<center>
					<Tokens  address={address} chain={networks}/>
					</center>
				
				</TabPanel>
  </Tabs>
		
				<Footer></Footer>
			</div>
		</div>
		</div>

	);
};

export default Wallet;
