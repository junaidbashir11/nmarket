import { useLogout } from "@thirdweb-dev/react";
import Link from "next/link";
export default function Header(){


let logout=useLogout()

 return (
  <div>

  
<div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        
        <span className="fs-4">Krypt</span>
      </a>

      <ul className="nav nav-pills">
      
        <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
        <li className="nav-item"><Link href="/mint">Create</Link></li>
        <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
        <li className="nav-item"><button className="btn btn-danger" onClick={()=>logout()}>Logout</button></li>
      </ul>
    </header>
  </div>

  </div>
 )
}