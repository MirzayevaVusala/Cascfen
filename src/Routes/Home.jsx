import Navbar from "../Components/Navbar";
// import Hero from "../Components/Hero";
// import AboutImg from "../images/pic1.jpg"
// import Destination from "../Components/Destination";
// import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
import Logo from "../Components/Logo";
import Ribbon from "../Components/Ribbon";
import Newest from "../Components/Newest";
import Projects from "../Components/Projects";
import Articles from "../Components/Articles";
import QhtSectors from "../Components/Qhtsectors";
import InternationalSector from "../Components/InternationalSector";
import MustRead from "../Components/MustRead";
function Home(){
    return(
        <>
      <Navbar />
      <Logo/>
      <Ribbon/>
      <Newest/>
      <Projects/>
      <Articles/>
      <QhtSectors/>
      <InternationalSector/>
      <MustRead/>
      
      
   
        <Footer />
        </>
    )

}
export default Home;