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
    <div className=' grid grid-cols-1 sm:grid-cols-2  bg-green-300 justify-items-end'>
      <h1 className="text-center p-6 font-black text-4xl w-full">Gestor De Finanzas</h1>
      <button className="bg-red-500 w-full mb-2 sm:w-fit text-3xl text center text-white px-4 py-2 rounded sm:m-3 sm:mr-4" onClick={handleEliminarRegistros}>Reiniciar App</button>
    </div>
  )
}
