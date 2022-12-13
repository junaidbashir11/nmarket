import useSWR from "swr";


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Tokens(props){

 const { data, error } = useSWR(
  `/api/token2?address=${props.address}&chain=${props.chain}`,
  fetcher
);


if (error) return  "Please connect your wallet";
if (!data)  return "Loading...";



return (
 <div>

<p style={{color:"white"}}>{JSON.stringify(data,null,2)}</p>

  </div>

)

}