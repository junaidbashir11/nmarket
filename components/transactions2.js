import useSWR from "swr";
import { Parallax } from 'react-scroll-parallax';
import { Slide ,Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


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
  
  
  <Slide>


     
  {data.map(obj=>(

<>
<p style={{color:"white"}}>from :{obj.from}</p>
<p style={{color:"white"}}> to :{obj.to}</p>
</>


))}

  </Slide>
 


  


  </div>

)

}