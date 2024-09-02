import { Outlet } from "react-router-dom"
import NavigationBar from "../../components/Navbar/NavigationBar"
import Footer from "../../components/Footer/Footer"


function Layout() {
  return (
    <>
      <NavigationBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout