
import {useContract,ThirdwebNftMedia} from "@thirdweb-dev/react"
import { useState } from "react";
import { useRouter } from "next/router";


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



 <div>
		
    <section className="">
  <div className="">
   
    <h1>MarketPlace</h1>
    {
    listing !==""?
    
    <>
    <center>
    {listing?.map((obj)=>(

<div>

<ThirdwebNftMedia
              key={obj.asset.id}
              metadata={obj.asset}
              height={600}
              width={500}
            />
<p className="badge bg-dark">{obj.buyoutCurrencyValuePerToken.displayValue}</p><br/>  
<p className="badge bg-dark">{obj.buyoutCurrencyValuePerToken.symbol}</p>   
 <button onClick={()=>buy(obj.id)} className="">Buy</button>         
</div>

 ))}

    </center>
  
    </>
    :
    <>
    <p>Loading .......</p>
    </>
    
    
    
    }
            
  </div>
  </section>

 </div>
)





}