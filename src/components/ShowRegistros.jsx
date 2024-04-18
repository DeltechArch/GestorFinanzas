import { formatCurency } from "../helpers";

export default function Registros({ registros,setRegistros }) {

    // Función para eliminar un registro por su ID
    const eliminarRegistro = (id) => {
        const nuevosRegistros = registros.filter(registro => registro.id !== id);
        setRegistros(nuevosRegistros);
      };





    return (
        <div className='min-w-72  flex flex-col justify-center mx-auto m-5 p-1 border border-green-600'>
            {registros.length > 0 ? (
                <>
                    <h2 className='text-center font-black  mb-1'>Registros guardados:</h2>
                    <div className=" w-full grid grid-cols-4 items-center  text-center p-1 text-xs md:text-lg  font-black">
                        <p>Tipo</p>
                        <p>Concepto</p>
                        <p>Cantidad</p>
                      
                    
                    </div>

                    <div className=" w-full h-96 overflow-y-auto overflow-x-hidden">

                        {registros.map((registro, index) => (


                            <div key={index} className='bg-green-200 w-full text-xs grid grid-cols-4 mb-2 items-center   border border-green-600 '>
                                <p className={`text-center ${registro.tipo === 'deposito' ? 'bg-green-500' : 'bg-red-500'}`}>{registro.tipo}</p>
                                <p className="text-center text-sx  font-black text-green-700 "> {registro.concepto}</p>
                                <p className="text-center"> {formatCurency(registro.cantidad)}</p>
                                <button className=" text-white ml-2 p-1  bg-red-600" onClick={() => eliminarRegistro(registro.id)}>X</button>
      
                                
                            </div>


                        ))}
                    </div>

                </>
            ) : (
                <h2 className='text-center font-black text-md sm:text-4xl mb-5'>Aun no hay Registros</h2>
            )}
        </div>
    );
}
