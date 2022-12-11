
import {useContract,ThirdwebNftMedia} from "@thirdweb-dev/react"
import { useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/header"
import Footer from "../components/footer";

export default function Marketplace(){

  let router=useRouter()
  const [listing,setListings]=useState("")
  const { contract:marketplace } = useContract("0xeF75DaeCD0a7484B90E7Ba6B2C3Ee10ad0c5494f","marketplace")
  

  async function getlistings(){

  const listings = await marketplace?.getActiveListings();
  setListings(listings)
  console.log(listings)
  
  }

getlistings()


async function buy(listingId){
  await marketplace.direct.buyoutListing(listingId,1);
  router.reload()
}

return (



 <div style={{"background-image":"url(/bc.jpeg)"}}>
		<Header></Header>
    <section className="">
  <div className="container">
   
    <h1>MarketPlace</h1>
    <title>MarketPlace | Krypt</title>

    {
    listing !==""?
    
    <div className="d-flex flex-row bd-highlight mb-3" style={{padding:"3px"}}>
  
    {listing?.map((obj)=>(

<div className="">


<div className="">
        </div>
        <div className="">
            <div className="card text-white bg-warning">
                <div className="card-body">
                    <h3 className="card-title"></h3>
                    <ThirdwebNftMedia
              key={obj.asset.id}
              metadata={obj.asset}
              height={300}
              width={500}
            /><br/>
<p className="badge bg-dark">{obj.buyoutCurrencyValuePerToken.displayValue}</p><br/>  
<p className="badge bg-dark">{obj.buyoutCurrencyValuePerToken.symbol}</p>   
 <button onClick={()=>buy(obj.id)} className="btn btn-outline-light">Buy</button> 
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </div>





        
</div>

 ))}
  
    </div>
    :
    <>
    <p>Loading .......</p>
    </>
    
    
    
    }
            
  </div>
  </section>
  <Footer></Footer>

 </div>
)





}