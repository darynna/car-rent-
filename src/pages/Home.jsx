import { useEffect } from "react";
import HomeComponent from '../components/Home/Home'

const Home = () => {
    useEffect(() => {
        const main = document.getElementsByTagName("main");
        main[0].classList.add("backdrop-visible");
        document.body.style.overflowY = "hidden";
    
        return () => {
          main[0].classList.remove("backdrop-visible");
          document.body.style.overflowY = "visible";
        };
      }, []);
    return(
        <HomeComponent/>
    )
}

export default Home