import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Transactions(props){

 const { data, error } = useSWR(
  `/api/transactions?address=${props.address}&chain=${props.chain}`,
  fetcher
);


if (error) return  "Please connect your wallet";
if (!data)  return "Loading...";



return (
 <div>

<p>{JSON.stringify(data,null,2)}</p>

  </div>

)

}