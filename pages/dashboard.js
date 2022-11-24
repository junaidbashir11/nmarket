import { getCookie} from 'cookies-next';
import {useState} from "react";
import Link from 'next/link';

function Dashboard() {
    const [res,setRes]=useState("")
    async function getFitbitData() {
     
        let request=await fetch("https://api.fitbit.com/1/user/-/activities/goals/daily.json",{
             method:"get",
             headers:{
        "Accept": "application/json",
        "Authorization": `Bearer ${ getCookie("fittoken")}`
             }
        })
         let response=await request.json()
         console.log(response)
         setRes(response)
         console.log(res)
         console.log(getCookie("fittoken"))
         }     


    return (
        <div className="">

       <center>
        <h1 style={{color:"tomato"}}>Dashboard</h1>
        <div className="container">
        <button className="btn btn-dark"><Link href="/api/getcodefitbit" style={{color:"orange",textDecoration:"none"}}>Fitbit Connect</Link></button>
        <div className="container">
  <div className="row">
    <div className="col">
      <div className="card">
        <div className="card-body">
          <button className="btn btn-warning"  onClick={()=>getFitbitData()}> get goals </button>
          <div>
          <pre  className="container bg-dark" style={{color:"green"}}>{JSON.stringify(res,null,2)}</pre>
          </div>
        </div>
      </div>
    </div>
    <div className="col">

    <div className="card">
        <div className="card-body">
          <button className="btn btn-danger">recorded goals</button>
        </div>
      </div>
    </div>
    <div className="col">
    <div className="card">
        <div className="card-body">
          <button className="btn btn-success">Token Reward</button>
        </div>
      </div>
    </div>
  </div>
</div>


        </div>

        <div className="card">
            <div className="card-body">
             <button className="btn btn-primary">Recommendations</button>
            </div>
        </div>
       </center>

        </div>
    )


}
export default Dashboard;