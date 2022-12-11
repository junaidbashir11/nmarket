import { ConnectWallet } from "@thirdweb-dev/react";
import styles  from "../styles/Home.module.css";
import Link from "next/link"

export default function Header(){
  const logo = '../public/images/krypt-logo.png';

 return (
  <div  style={{"background-image":"url(/bc.jpeg)"}}>

<div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        
        <span className="fs-4">
          <img src="https://i.imgur.com/lbOrNhq.png"/>
        </span>
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item"><a href="/" className="nav-link" aria-current="page" style={{color:"white"}}>Home</a></li>
        <li className="nav-item"><a href="/mint" className="nav-link" style={{color:"white"}}>Mint</a></li>
        <li className="nav-item"><a href="/marketplace" className="nav-link" style={{color:"white"}}>Market Place</a></li>
        <li className="nav-item"><a href="/wallet" className="nav-link" style={{color:"white"}}>Wallet</a></li>
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