import { useEffect, useState } from "react"
import Card from "../../components/Card/Card"
import NavigationBar from "../../components/Navbar/NavigationBar"
import FetchData from "../../Utils/FetchDataByCategory"


function Home() {
 const [data,setData] = useState([])

 useEffect(()=>{
  const response = FetchData()
  setData(response)
 },[])
console.log(data)

  return (
    <>
        <NavigationBar/>
        {/* {data.map((items,index)=>{
          return (
            <Card key={index} Title={items.title} Description={items.handle}   />
          )
        })} */}
    </>
  )
}

export default Home