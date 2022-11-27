import { useUser } from "@thirdweb-dev/react";

import styles from "../styles/Home.module.css";
import Header from "../components/header";
const Home = () => {
  const { user } = useUser();

  return (
    <div className="">
    
      <div className="">
      <Header></Header>
        
      </div>
      
    </div>
  );
};


export default Home;
