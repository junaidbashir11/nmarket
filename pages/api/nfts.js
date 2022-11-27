
import Moralis  from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';
let chain=""

export default async function getdata(req,res) {

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

const response = await Moralis.EvmApi.nft.getWalletNFTs({
    address,
    chain,
});

return res.json(response)


 
}