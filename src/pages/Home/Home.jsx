import { useEffect, useState } from "react"
import Card from "../../components/Card/Card"
import NavigationBar from "../../components/Navbar/NavigationBar"
import FetchData from "../../Utils/FetechData"
import { useQuery } from "@tanstack/react-query"


function Home() {
  

const {data} = useQuery({ 
  queryKey: ['Products'], 
  queryFn: () => FetchData() 
})

 console.log(data)
  
  return (
    <>
        <NavigationBar/>
        {data?.map((items,index)=>{
          return (
            <Card key={index} Title={items.title} image={items.images[0].src} Description={items.handle}   />
          )
        })}
    </>
  )
}

export default Home