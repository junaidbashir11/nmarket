import {createHash} from "node:crypto";



export default function getcodefitbit(req,res){

let URL2="https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=238WZ8&redirect_uri=https%3A%2F%2Fornate-nasturtium-2c5fb0.netlify.app%2Fapi%2Ffitbitredirect&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight%20oxygen_saturation%20respiratory_rate%20temperature&expires_in=604800"
let codeverifier=process.env.CODEV 
let codechallange=createHash('sha256').update(codeverifier).digest("base64url")
let URL=`https://www.fitbit.com/oauth2/authorize?client_id=238WZ8&response_type=code&code_challenge=${codechallange}&code_challenge_method=S256&scope=activity%20heartrate%20location%20nutrition%20oxygen_saturation%20profile%20respiratory_rate%20settings%20sleep%20social%20temperature%20weight`

return res.redirect(URL)


}