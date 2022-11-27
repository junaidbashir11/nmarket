import Moralis  from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';
import { ethers } from 'ethers';
let chain=""


export default async  function gettoken2(req,res){


 const address =req.query.address;
 const userselectedchain=req.query.chain
 
 
 switch(userselectedchain){
     case "mumbai":
         chain=EvmChain.MUMBAI
         break;
     case "eth":
         chain=EvmChain.ETHEREUM
         break;
     
 }
 
 
 await Moralis.start({
     apiKey: 'dQqwOfyiJmUmbpw1HFDevR2hAIVyqci43mab0bY8XzhMm2qMiQH9ZIidjMFiP6Jx',
     // ...and any other configuration
 });
 
 const response = await Moralis.EvmApi.balance.getNativeBalance({
     address,
     chain,
 });
 
 console.log(parseFloat(response.result.balance.rawValue,16))
 return res.json(parseFloat(response.result.balance.rawValue,16))





}