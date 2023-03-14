export default function GetCars(token){
    const unir= 'bearer'.concat(' ',token)
    return fetch('https://x8ki-letl-twmt.n7.xano.io/api:ish37JFc/vehiculos' , {
        method: 'get',
        headers:{
        
            Authorization:`${unir}`, 
        }
      })
        .then(response => response.json())
        .then(response => {
          return response
        })
        .catch(error => console.error('Error:', error))
}