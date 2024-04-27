import { formatCurency } from "../helpers";

export default function Registros({ registros, setRegistros }) {

    // Función para eliminar un registro por su ID
    const eliminarRegistro = (id) => {
        const nuevosRegistros = registros.filter(registro => registro.id !== id);
        setRegistros(nuevosRegistros);
    };





    return (
        <div className=' grid grid-cols-1 w-72 justify-center mx-auto m-5 p-1'>
            {registros.length > 0 ? (
                <>
                    <h2 className='text-center text-3xl font-black uppercase mb-1'>Registros guardados</h2>
                   

                    <div className=" w-full h-96 overflow-y-auto overflow-x-hidden">

                        {registros.map((registro, index) => (


                            <div key={index} className={`w-full ${registro.tipo === 'ingresos' ? 'bg-green-600' : 'bg-red-600'} text-sm text-center grid grid-cols-3 p-1 mb-2 items-center border border-gray-300 rounded-lg shadow-md `}>

                                <div className=" grid grid-cols-1 gap-y-1 text-white font-black ">
                                    <p  className=" p-1">{registro.tipo}</p>
                                    <p className=" p-1" > {formatCurency(registro.cantidad)}</p>

                                </div>
                                <p className="text-center text-sx  font-black text-white "> {registro.concepto}</p>



                                <div className=" grid grid-cols-1 gap-y-1 text-white">
                                    <button className="  p-1  bg-red-600 border border-slate-50" onClick={() => eliminarRegistro(registro.id)}>Eliminar</button>
                                    <button className="  p-1 bg-blue-700">Editar</button>
                                </div>



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
