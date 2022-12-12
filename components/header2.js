import { useLogout } from "@thirdweb-dev/react";
import Link from "next/link";
export default function Header(){


let logout=useLogout()

 return (
  <div style={{"background-image":"url(/bc.jpeg)"}}>

  
<div className="container">
<header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">

    
        
        <span className="fs-4">Krypt</span>
      

      <ul className="nav nav-pills">
      
        <li className="nav-item"><Link href="/features"><a className="nav-link" style={{color:"white"}}>Features</a></Link></li>
        <li className="nav-item"><Link href="/mint"><a  style={{color:"white"}}>Create</a></Link></li>
        <li className="nav-item"><Link href="/features"><a  className="nav-link" style={{color:"white"}}>FAQs</a></Link></li>
        <li className="nav-item"><Link href="/about"><a  className="nav-link" style={{color:"white"}}>About</a></Link></li>
        <li className="nav-item"><button className="btn btn-danger" onClick={()=>logout()}>Logout</button></li>
      </ul>
    </header>
  </div>

  </div>
 )
}