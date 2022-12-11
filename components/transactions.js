import useSWR from "swr";
import { Parallax } from 'react-scroll-parallax';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Transactions(props){

 const { data, error } = useSWR(
  `/api/transactions?address=${props.address}&chain=${props.chain}`,
  fetcher
);


if (error) return  "Please connect your wallet";
if (!data)  return "Loading...";



return (
 <div style={{backgroundColor:""}}>
  
  <select className="badge bg-primary">
  
      
    {data.map(obj=>(

<option className="alert alert-light" style={{fontFamily:"courier new",fontWeight:"bold"}} key={obj.from}>
<p>from :{obj.from}</p>
<p> to :{obj.to}</p>
</option>


))}

</select>

  


  </div>

)

}