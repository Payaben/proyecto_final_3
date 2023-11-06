import React, { useContext, useEffect } from "react";
import AppContext from "../../Context/ContextApp";

const HistorialDetalle = ({
  date,
  propiedad,
  ubicacion,
  metros,
  cotizacion,
}) => {
  const { setHistorial, traerInfoHistorial, historial } =
    useContext(AppContext);

  useEffect(() => {
    const data = traerInfoHistorial();
    setHistorial(data);
  }, []);

  return (
    <tr>
      {/* Fecha de cotización */}
      <td>{date}</td>
      {/* Fecha de cotización */}

      {/* Propiedad */}
      <td>{propiedad}</td>
      {/* Propiedad */}

      {/* Ubicación */}
      <td>{ubicacion}</td>
      {/* Ubicación */}

      {/* Metros cuadrados*/}
      <td>{metros}</td>
      {/* Metros cuadrados*/}

      {/* Póliza mensual */}
      <td>{cotizacion}</td>
      {/* Póliza mensual */}
    </tr>
  );
};

export default HistorialDetalle;
