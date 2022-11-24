const {base64encode}=require("nodejs-base64")

export default async function test(req,res){


 let base64string=base64encode("238WZ8:bff0f4bb8031cad1a0c555cff39e60f0")
 return res.send(base64string)




}