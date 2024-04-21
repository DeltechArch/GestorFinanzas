import React from 'react'

export default function Header() {

  const handleEliminarRegistros = () => {
    
    
    confirm('Seguro que quieres Reiniciar, los datos se perderan permanentemente')
    // Eliminamos la información de la clave "registros" del local storage
    localStorage.removeItem('registros');
    // Actualizamos la página para reflejar el cambio
    window.location.reload();



  };

  return (
    <div className=' grid grid-cols-2 bg-green-700 justify-items-end items-center'>
      <h1 className="text-center p-2 font-black text-lg w-full">Gestor De Finanzas</h1>
      <button className="bg-red-500 w-fit p-1 mr-2 font-black  text-lg text center text-white  rounded" onClick={handleEliminarRegistros}>Reiniciar App</button>
    </div>
  )
}
