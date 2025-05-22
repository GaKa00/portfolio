import React, { useState } from 'react'
import { NeonGear } from '../assets/gear'
import './styles/Contact.css'
import ContactModal from './ContactModal'

export default function Contact() {
  const [open , setOpen] = useState(false)




  return (
    <div>

       {open ? (
        <ContactModal onClose={() => setOpen(false)}/>
       ) : (
        <>
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Green_cogwheel.svg" alt='cog' className='gear'/>
        <button onClick={()=> setOpen(true)} className='modal-button'>
          Contact
        </button>
        </>
       )}
    </div>
  )
}
