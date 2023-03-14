import { useField,useFormikContext, Form, Formik } from 'formik';
import './Field.css'

export default function Field ({ label,validate:validate, ...props }) {
    const {values, submitCount} = useFormikContext()
    const [field, meta, helpers] = useField({validate:validate, ...props});
    
    
    return (
      <>
        <label className='label'>
          <span>{label}</span>
          <input {...field} {...props} className='input' />
          </label>
        {submitCount > 0 && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };