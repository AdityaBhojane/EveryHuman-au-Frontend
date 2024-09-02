
import NavigationBar from "../../components/Navbar/NavigationBar"
import MainSection from "../../components/MainSection/MainSection"
import NewArrivals from "../../components/NewArrivals/NewArrivals"
import Footer from "../../components/Footer/Footer"
import Banner from "../../components/Banner/Banner"
import BestSeller from "../../components/BestSeller/BestSeller"
import FastDelivery from "../../components/FastDelivery/FastDelivery"



function Home() {
  

  return (
    <>
        <MainSection/>
        <Banner/>
        <BestSeller/>
        <NewArrivals/>
        <FastDelivery/>
    </>
  )
}

export default Home