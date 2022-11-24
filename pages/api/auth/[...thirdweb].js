import { ThirdwebAuth } from "@thirdweb-dev/auth/next";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  privateKey: process.env.PRIVATE_KEY || "dfcc388545f0a898fc0a5855fcd239521d225a4fc1d2c2ce24d4224ffa65639f",
  domain: "example.org",
});
export default ThirdwebAuthHandler();