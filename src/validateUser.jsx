import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
 

export default function validateUser(values){
    const {email,password}=values

  return fetch(`https://x8ki-letl-twmt.n7.xano.io/api:ish37JFc/auth/login?email=${email}&password=${password}`, {
    method: 'POST'
  })
    .then(response => response.json())
    .then(response => {
      console.log('Success:', response)
      return response
    })
    .catch(error => console.error('Error:', error))
    
}



/*

fetch('https://x8ki-letl-twmt.n7.xano.io/api:ish37JFc:v1/vehiculos', { 
    method: 'get', 
    headers:{
        'Authorization': 'bearer eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.4TIGZdszblEqRNSvpbRm1kKz2yq8hrh9fOZWpLdPHPSCarybZsan_juDNsNbdEtLWMQJojesM2yaURJifmAnfZkpwBL9q11n.K4cuwI-yS4avcb2BET9bLw.XGFk0nKcje4jQiZ5oGuFN4vSpQZ_n3RHqV0h0WA89FybsJh2RB3WE9VAGkNv7Tzcq9AoFri_VV5GwdCXQYevUFEUDYgp1mZjEgv32EAZKVxnmSuJKNV52dqY0_WbjtUjjBt2uDJvdycpkyM6UgECVJcAbFYeotb22nPN1VvJ3b4.ZNtz3LE1qSEItgrRD3nfj_QSSnzymW21mNeTcLYuePU', 
    }
}).then(response => response.json())
  .then(response => console.log(response))

*/