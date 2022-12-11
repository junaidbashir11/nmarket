import { ConnectWallet } from "@thirdweb-dev/react";
import styles  from "../styles/Home.module.css";
import Link from "next/link"

export default function Header(){
  const logo = '../public/images/krypt-logo.png';

 return (
  <div  style={{"background-image":"url(/bc.jpeg)"}}>

<div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    
        
        <span className="fs-4">
          <img src="https://i.imgur.com/lbOrNhq.png"/>
        </span>
      
      <ul className="nav nav-pills">
        <li className="nav-item"><Link href="/"><a className="nav-link" aria-current="page" style={{color:"white"}}>Home</a></Link></li>
        <li className="nav-item"><Link href="/mint"><a className="nav-link" style={{color:"white"}}>Mint</a></Link></li>
        <li className="nav-item"><Link href="/marketplace"><a className="nav-link" style={{color:"white"}}>Market Place</a></Link></li>
        <li className="nav-item"><Link href="/wallet"><a className="nav-link" style={{color:"white"}}>Wallet</a></Link></li>
        <li className="nav-item"><ConnectWallet
          auth={{
            loginOptional: false,
          }}
        /></li>
      </ul>
    </header>
  </div>

  </div>
 )
}