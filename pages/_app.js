import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'
// This is the chainId your dApp will work on.
//import { ChakraProvider } from '@chakra-ui/react'
import { ParallaxProvider } from 'react-scroll-parallax';


const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={activeChainId}
      authConfig={{
        domain: "example.org",
        authUrl: "/api/auth",
        loginRedirect: "/wallet",
      }}

    >
<ParallaxProvider>

      <Component {...pageProps} />
</ParallaxProvider>

      </ThirdwebProvider>
  );
}

export default MyApp;
