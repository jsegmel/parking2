import { useEffect, useState } from "react"
import GetCars from "./GetCars"

export default function Dashboard (){
    const [cars,setCars]=useState([])
   const token=localStorage.getItem('token')
   useEffect(()=>{
    GetCars(token)
   .then(response=>setCars(response))
    
   },[])

   console.log(cars)
    return(
        <div>
          {cars.map((car)=> <div> <span>{car.marca}</span> ,<span>{car.modelo}</span> </div>)}
        </div>
    )
}