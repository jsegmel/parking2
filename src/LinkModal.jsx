import './LinkModal.css'
import Modal from './Modal';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import FormLogin from './FormLogin';

export default function LinkModal({children}){
    const [showModal, setShowModal] = useState(false);
    console.log(showModal)
    return(
        <>
         <button onClick={() => setShowModal(true)} className="LinkMenu">{children}</button>
          {showModal && createPortal(
          <Modal 
            title='login' 
            close={()=>setShowModal(false)}
            children= {<FormLogin/>}
            />,document.getElementById('modal'))}
        </>
    )
}