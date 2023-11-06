import { createContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  function miLocalStorage(obj) {
    if (JSON.parse(localStorage.getItem("historial")) === null) {
      localStorage.setItem("historial", JSON.stringify([obj]));
    } else {
      let LSHistorial = JSON.parse(localStorage.getItem("historial"));
      console.log("LSHistorial", LSHistorial);
      LSHistorial.push(obj);
      localStorage.setItem("historial", JSON.stringify(LSHistorial));
    }

    return JSON.parse(localStorage.getItem("historial"));
  }

  const [historial, setHistorial] = useState(
    JSON.parse(localStorage.getItem("historial"))
  );

  function guardarInfoHistorial(metros, propiedad, ubicacion, cotizacion) {
    let today = new Date();
    let fecha = today.toLocaleDateString("en-GB");
    let horas = today.toLocaleTimeString("en-GB");
    let fechaCompleta = `${fecha} ${horas}`;

    if (isNaN(cotizacion)) {
      console.log("No se guardó en el Local Storage");
      return "No se guardó en el Local Storage";
    }

    let obj = {
      date: fechaCompleta,
      metros,
      propiedad,
      ubicacion,
      cotizacion,
    };

    let historialLS = miLocalStorage(obj);
    setHistorial([historialLS]);

    return historialLS;
  }

  function traerInfoHistorial() {
    return JSON.parse(localStorage.getItem("historial"));
  }

  return (
    <AppContext.Provider
      value={{
        guardarInfoHistorial,
        traerInfoHistorial,
        historial,
        setHistorial,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
