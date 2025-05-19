import React, { useState } from 'react'

export default function Contact() {
  const [open , setOpen] = useState(false)

  return (
    <div>

       {open ? (
        <ContactModal/>
       ) : (

        <button onClick={()=> setOpen(true)}>
          Contact
        </button>
       )}
    </div>
  )
}
