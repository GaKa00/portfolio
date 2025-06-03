import React, { useState } from 'react'
import { NeonGear } from '../assets/gear'
import './styles/Contact.css'
import ContactModal from './ContactModal'

export default function Contact() {
  const [open , setOpen] = useState(false)




  return (
    <div className='button-container'>

       {open ? (
        <ContactModal onClose={() => setOpen(false)}/>
       ) : (
        <>
        <button onClick={()=> setOpen(true)} className='modal-button'>
          Contact
        </button>
        </>
       )}
    </div>
  )
}
