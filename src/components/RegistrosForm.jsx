import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function DepositosForm({ handleAgregarRegistro }) {
    const [tipo, setTipo] = useState('');
    const [concepto, setConcepto] = useState('');
    const [cantidad, setCantidad] = useState('');
   

    const handleSubmit = (e) => {
        e.preventDefault();

        if (concepto === '' || cantidad === '' ||  tipo === '') {
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
       


    };

    return (
        <>

            <div>
                <form onSubmit={handleSubmit} className='min-w-72 max-w-sm mx-auto mt-3 space-y-5 m-2 p-2 border border-green-600' >
                    <h2 className=' text-center font-black text-lg md:text-3xl mb-5 bg-green-500 p-4 uppercase'>Registros</h2>

                    <div className=' flex flex-col  space-y-2 '>
                        <label className='  text-sm font-black  md:text-3xl' htmlFor="tipo">Ingreso o Gasto </label>
                        <select
                            className='border border-green-600 p-2'
                            id="tipo"
                            name="tipo"
                            value={tipo}
                            onChange={(e) => setTipo(e.target.value)}
                        >
                            <option value="">Selecciona una categoría</option>
                            <option value="deposito">Ingresos</option>
                            <option value="gastos">Gasto</option>


                        </select>
                    </div>

                    <div className=' flex flex-col space-y-2 '>
                        <label className='  text-sm font-black  md:text-3xl' htmlFor="concepto">Concepto:</label>
                        <input
                            className='border border-green-600 p-2'
                            type="text"
                            id="concepto"
                            name="concepto"
                            placeholder="Concepto-max 10 caracteres"
                            value={concepto}
                            onChange={(e) => setConcepto(e.target.value.slice(0, 10))} // Limitar a 10 caracteres
                        />
                    </div>

                    <div className=' flex flex-col  space-y-2 '>
                        <label className='  text-sm font-black  md:text-3xl' htmlFor="cantidad">Cantidad:</label>
                        <input
                            className='border border-green-600 p-2'
                            type="number"
                            id="cantidad"
                            name="cantidad"
                            placeholder="Escriba la cantidad"
                            value={cantidad}
                            onChange={(e) => setCantidad(e.target.value)}
                        />
                    </div>

                    

                    <button className=' bg-green-200 w-full text-4xl p-2' type="submit">Registar</button>
                </form>
            </div>


        </>

    )
}
