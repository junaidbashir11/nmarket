import { ThirdwebSDK } from "@thirdweb-dev/sdk";

export default async function Tokens(req,res) {

let address=req.query.address
const sdk = new ThirdwebSDK("mumbai");
const contract = await sdk.getContract("0x15aE6A2C4Cb09529880E1f922912fEd5f45dAe16", "token");
const amount = "1";
await contract.mintTo(address, amount);

return res.json({status:true})


}