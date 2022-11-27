import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'
// This is the chainId your dApp will work on.
//import { ChakraProvider } from '@chakra-ui/react'

const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={activeChainId}
      authConfig={{
        domain: "example.org",
        authUrl: "/api/auth",
        loginRedirect: "/dashboard",
      }}

    >


      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
