
import {Form, Formik} from 'formik';
import { useNavigate } from 'react-router-dom';
import Field from './Field';
import './FormLogin.css'
import validateUser from './validateUser';


export default function Login(){
  const navigate = useNavigate()
  const validateEmail=(value)=>{
    let errors = null
    if(!value){
      errors='CAMPO VACÍO'
  } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    
      errors='INTRODUZCA UN E-MAIL VALIDO'
  }
  console.log(errors)
    return errors
  }
  const validatePassword=(value)=>{
    let errors = null
    if(!value){
      errors='CAMPO VACÍO'
  } else if ( value.length < 6) {
    
      errors='LA CONTRASEÑA DEBE CONTENER 6 CARACTERES'
  }
  console.log(errors)
    return errors
  }

    return(
      <div className='form-container'>
       
        <Formik
            initialValues={{
              email :'',
              password:''
            }}
            onSubmit={(values) => (
             validateUser(values)
             .then(response=>{
                  navigate('/dashboard')
                  localStorage.setItem('token', response.authToken)
             })

              )}
           

           
            
        >
         <Form className='form-login' noValidate >
           <Field className='field' name="email" type="e-mail" label="E-MAIL" validate={validateEmail}/>
           <Field className='field' name="password" type="password" label="PASSWORD" validate={validatePassword}/>
           <button type="submit" >ENVIAR</button>
         </Form>       
            
        </Formik>
      
      </div>
    )

}
