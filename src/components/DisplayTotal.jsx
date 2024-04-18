import { formatCurency } from "../helpers";

export default function DisplayTotal({ registros }) {


  const depositos = registros.filter(registro => registro.tipo === 'deposito');
  const gastos = registros.filter(registro => registro.tipo === 'gastos');


  const totalDepositos = depositos.reduce((total, registro) => total + registro.cantidad, 0);
  const totalGastos = gastos.reduce((total, registro) => total + registro.cantidad, 0);

  const disponible = totalDepositos - totalGastos;




  return (
    <>
      <div className='   p-2 flex w-full flex-col  sm:flex-row mx-auto justify-around bg-slate-900 text-white font-black text-lg md:text-3xl text-center '>

        <div className=" border border-white mb-1 p-2">
          <p>Total Depositos</p>
          <span>{formatCurency(totalDepositos)}</span>
        </div>

        <div className=" border border-white mb-1 p-2">
          <p>Total Gastos</p>
          <span>{formatCurency(totalGastos)}</span>
        </div>

        <div className='border border-white mb-1 p-2'>
          <p> Disponible </p>
          <span className={`${disponible < 0 ? 'text-red-500' : 'text-green-500'}`}>{formatCurency(disponible)}</span>
        </div>

      </div>
    </>
  )
}
