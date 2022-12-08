import { ConnectWallet } from "@thirdweb-dev/react";
import styles  from "../styles/Home.module.css";

export default function Header(){
  const logo = '../public/images/krypt-logo.png';

 return (
  <div>

<div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        
        <span className="fs-4">
          <img src="https://i.imgur.com/lbOrNhq.png"/>
        </span>
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item"><a href="/" className="nav-link" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="/mint" className="nav-link">Mint</a></li>
        <li className="nav-item"><a href="/marketplace" className="nav-link">Market Place</a></li>
        <li className="nav-item"><a href="/wallet" className="nav-link">Wallet</a></li>
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