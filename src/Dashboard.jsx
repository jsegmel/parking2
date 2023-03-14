import GetCars from "./GetCars"
export default function Dashboard (){
   const token=localStorage.getItem('token')
   GetCars(token)
   .then(response=>console.log(response))
    return(
        <div>
          
        </div>
    )
}