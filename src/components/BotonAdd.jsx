import { useState } from "react"

export default function BotonAdd({handleVisible}) {
 

 return (
  <div className='grid grid-cols-1 w-48 text-white font-bold p-2 mx-auto mt-1 mb-8 bg-green-700'>
   
   <button 
   type="button"
   onClick={handleVisible}
   >Agregar Registro</button>

  </div>

 )
}
