import './Modal.css'
export default function Modal(props){
  const {title,close,children=null}=props
    return (
      <div className='modal_container' onClick={close}>
        <div className="modal" onClick={(e)=>{
          e.stopPropagation()
        }}>

            <div className='barra-titulo' onClick={close}>
              <div className='title-modal'>{title}</div>
              <div className='close'>X</div>
            </div>
            <div className='modal-body'>{children}</div>
        </div>
      </div>
    )
}