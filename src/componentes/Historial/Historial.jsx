import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../Context/ContextApp";
import HistorialDetalle from "./HistorialDetalle/HistorialDetalle";

const Historial = () => {
  const { historial } = useContext(AppContext);

  return (
    <div className=" center div-cotizador">
      {historial === null ? (
        <p id="no_cotizaciones" >No hay cotizaciones realizadas con anterioridad.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Fecha de cotización</th>
              <th>Propiedad</th>
              <th>Ubicación</th>
              <th>Metros cuadrados</th>
              <th>Póliza mensual</th>
            </tr>
          </thead>
          <tbody>
            {historial.map((hist, i) => {
              return <HistorialDetalle key={i} {...hist} />;
            })}
          </tbody>
        </table>
      )}
      <div className="center separador">
        <Link to="/">
          <button className="button button-outline">VOLVER</button>
        </Link>
      </div>
    </div>
  );
};

export default Historial;
