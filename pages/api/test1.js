import {createHash} from "node:crypto"

export default async function test1(){

let nnn=createHash("sha256").update("01234567890123456789012345678901234567890123456789").digest("base64url")

return res.json(nnn)


}