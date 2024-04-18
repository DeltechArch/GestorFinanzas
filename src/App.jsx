import React, { useState, useEffect } from "react";
import RegistrosFrom from "./components/RegistrosForm";
import Header from "./components/Header";
import ShowRegistros from "./components/ShowRegistros";
import DisplayTotal from "./components/DisplayTotal";

function App() {
  // Obtener los registros guardados en el localStorage si existen
  const [registros, setRegistros] = useState(
    JSON.parse(localStorage.getItem("registros")) || []
  );

  // Use useEffect para guardar los registros en el localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("registros", JSON.stringify(registros));
  }, [registros]);

  const handleAgregarRegistro = (nuevoRegistro) => {
    setRegistros([...registros, nuevoRegistro]);
  };

  return (
    <>
      <Header />
      <DisplayTotal
        registros={registros}
      />


      <div className="grid md:grid-cols-2 ">
        <RegistrosFrom
          handleAgregarRegistro={handleAgregarRegistro}
        />

        <ShowRegistros
          registros={registros}
          setRegistros={setRegistros}
        />
      </div>







    </>
  );
}

export default App;
