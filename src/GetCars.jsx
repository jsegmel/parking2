export default function GetCars(token){
    const unir= 'bearer'.concat('',token)
    console.log(unir)
    return fetch('https://x8ki-letl-twmt.n7.xano.io/api:ish37JFc/auth/login' , {
        method: 'get',
        headers:{
            'Authorization': unir, 
        }
      })
        .then(response => response.json())
        .then(response => {
          console.log('Success:', response)

          return response
        })
        .catch(error => console.error('Error:', error))
}