
import NavigationBar from "../../components/Navbar/NavigationBar"
import MainSection from "../../components/MainSection/MainSection"
import NewArrivals from "../../components/NewArrivals/NewArrivals"
import Footer from "../../components/Footer/Footer"
import Banner from "../../components/Banner/Banner"


function Home() {
  
  
  return (
    <>
        <NavigationBar/>
        <MainSection/>
        <Banner/>
        <NewArrivals/>
        <Footer/>
    </>
  )
}

export default Home