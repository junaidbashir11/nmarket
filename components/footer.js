import { ConnectWallet } from "@thirdweb-dev/react";
export default function Footer(){

    return(

        
<div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-muted">&copy; 2022 Krypt</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    <img src="https://i.imgur.com/lbOrNhq.png"/>
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
      <li className="nav-item"><a href="/mint" className="nav-link px-2 text-muted">Mint</a></li>
      <li className="nav-item"><a href="/marketplace" className="nav-link px-2 text-muted">Market Place</a></li>
      <li className="nav-item"><a href="/wallet" className="nav-link px-2 text-muted">Wallet</a></li>
    </ul>
  </footer>
</div>

    );
}