import { useUser } from "@thirdweb-dev/react";

import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";

const Home = () => {
  const { user } = useUser();

  return (
    <div className="">
    
      <div className="">
      <Header></Header>
      <title>Krypt</title>
      <Main></Main>
      <Footer></Footer>
        
      </div>
      
    </div>
  );
};


export default Home;
