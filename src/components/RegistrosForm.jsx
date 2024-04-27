import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import BotonAdd from "./BotonAdd";

export default function DepositosForm({ handleAgregarRegistro }) {
    const [tipo, setTipo] = useState('');
    const [concepto, setConcepto] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [visible, setVisible] = useState(false)

    const handleVisible = () => {
        setVisible(true)

    }

    const handleCancelar = () => {
        setVisible(false)
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (concepto === '' || cantidad === '' || tipo === '') {
            alert("Todos los campos son obligatorios");
            return;
        }


        const nuevoRegistro = {
            id: uuidv4(), // Generar un ID único utilizando uuid
            tipo: tipo,
            concepto: concepto,
            cantidad: Number(cantidad),

        };



        handleAgregarRegistro(nuevoRegistro);
        setTipo('')
        setConcepto('')
        setCantidad('')
        setVisible(false)



    };

    return (
        <>

            <div className="flex justify-center items-center ">

                <BotonAdd
                    handleVisible={handleVisible}
                />

                {visible && (
                    <form onSubmit={handleSubmit} className="absolute top-48  py-4 px-5 text-white bg-green-700"
                        
                    >
                        <h2 className=' text-center font-black text-lg md:text-2xl mb-1 p-1 uppercase'>Registros</h2>

                        <div className=' grid grid-cols-1  space-y-2 '>
                            <label className='  text-sm font-black  md:text-2xl' htmlFor="tipo">Ingreso o Gasto </label>
                            <select
                                className=' text-black rounded-lg p-1'
                                id="tipo"
                                name="tipo"
                                value={tipo}
                                onChange={(e) => setTipo(e.target.value)}
                            >
                                <option value="seleccionar">Seleciona un tipo</option>
                                <option value="ingresos">Ingresos</option>
                                <option value="gastos">Gasto</option>


                            </select>
                        </div>

                        <div className=' grid grid-cols-1  space-y-2 '>
                            <label className='  text-sm font-black  md:text-2xl' htmlFor="concepto">Concepto:</label>
                            <input
                                className=' text-black rounded-lg p-1'
                                type="text"
                                id="concepto"
                                name="concepto"
                                placeholder="Concepto-max 10 caracteres"
                                value={concepto}
                                onChange={(e) => setConcepto(e.target.value.slice(0, 10))} // Limitar a 10 caracteres
                            />
                        </div>

                        <div className=' grid grid-cols-1   space-y-2 '>
                            <label className='  text-sm font-black  md:text-2xl' htmlFor="cantidad">Cantidad:</label>
                            <input
                                className=' text-black rounded-lg p-1'
                                type="number"
                                id="cantidad"
                                name="cantidad"
                                placeholder="Escriba la cantidad"
                                value={cantidad}
                                onChange={(e) => setCantidad(e.target.value)}
                            />
                        </div>

                        <div className="grid grid-cols-2 mt-2 space-x-1 font-bold">
                            <button className=' bg-green-700 border-2 border-white' type="submit">Registar</button>
                            <button
                                className=' bg-red-700 border-2 border-white '
                                type="button"
                                onClick={handleCancelar}
                            >cancelar</button>
                        </div>




                    </form>


                )}
            </div>





        </>

    )
}
