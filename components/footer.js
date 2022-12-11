import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link"

export default function Footer(){

    return(

        
<div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-muted">&copy; 2022 Krypt</p>

    
    <img src="https://i.imgur.com/lbOrNhq.png"/>
    

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><Link href="/" ><a className="nav-link px-2 text-muted">Home</a></Link></li>
      <li className="nav-item"><Link href="/mint"><a  className="nav-link px-2 text-muted">Mint</a></Link></li>
      <li className="nav-item"><Link href="/marketplace" ><a className="nav-link px-2 text-muted">Market Place</a></Link></li>
      <li className="nav-item"><Link href="/wallet" ><a className="nav-link px-2 text-muted">Wallet</a></Link></li>
    </ul>
  </footer>
</div>

    );
}