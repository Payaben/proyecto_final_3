import { React, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Cotizador_Function } from "./Function_Cotizador/Function_Cotizador";
import datos from "../../json/datos.json";
import BotonHistorial from "../Historial/BotonHistorial/BotonHistorial";
// import { Class_Historial } from "../Historial/Function_Historial/Function_Historial";
import AppContext from "../Context/ContextApp";

const Cotizador = () => {
  const { guardarInfoHistorial } = useContext(AppContext);

  const [precioEstimado, setPrecioEstimado] = useState("00.00");

  let arr_datos_categoria_propiedad = [];
  let arr_datos_categoria_ubicacion = [];

  datos.filter((element) => {
    if (element.categoria === "propiedad") {
      arr_datos_categoria_propiedad.push(element.tipo);
    }
    return arr_datos_categoria_propiedad;
  });

  datos.filter((element) => {
    if (element.categoria === "ubicacion") {
      arr_datos_categoria_ubicacion.push(element.tipo);
    }
    return arr_datos_categoria_ubicacion;
  });

  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const precioEstimado = Cotizador_Function(
      35.86,
      data.propiedad,
      data.ubicacion,
      data.metros
    );

    // if (!isNaN(precioEstimado)) {

    setPrecioEstimado(precioEstimado);

    guardarInfoHistorial(
      data.metros,
      data.ubicacion,
      data.propiedad,
      precioEstimado
    );
  };
  // };

  return (
    <>
      <BotonHistorial />
      <h1 className="center separador">Seguros del hogar 🏡</h1>
      <form className=" center div-cotizador" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="center separador">Completa los datos solicitados</h2>

        {/* propiedad */}
        <label htmlFor="propiedad">Selecciona el tipo de propiedad</label>
        <select
          id="propiedad"
          defaultValue="df_propiedad"
          {...register("propiedad", {
            required: true,
          })}
        >
          <option value="df_propiedad" selected disabled>
            ...
          </option>

          {arr_datos_categoria_propiedad.map((param_datos_propiedad, i) => {
            return <option key={i}> {param_datos_propiedad} </option>;
          })}
        </select>
        {/* propiedad */}

        {/* ubicacion */}
        <label htmlFor="ubicacion">Selecciona su ubicación</label>
        <select
          id="ubicacion"
          defaultValue="df_ubicacion"
          {...register("ubicacion", {
            required: true,
          })}
        >
          <option value="df_ubicacion" selected disabled>
            ...
          </option>

          {arr_datos_categoria_ubicacion.map((param_datos_ubicacion, i) => {
            return <option key={i}> {param_datos_ubicacion} </option>;
          })}
        </select>
        {/* ubicacion */}

        {/* metros cuadrados */}
        <label htmlFor="metros2">Ingresa los Metros cuadrados:</label>
        <input
          type="number"
          defaultValue="20"
          id="metros2"
          min="20"
          max="500"
          {...register("metros", {
            required: true,
          })}
        />
        <div className="center separador">
          <button className="button button-outline">Cotizar</button>
        </div>
        {/* metros cuadrados */}

        {/* Precio Estimado */}
        <div className="center separador">
          <p className="importe">
            {isNaN(precioEstimado) ? (
              <span id="valorPoliza">
                Ingrese valores válidos en los campos. <br /> "..." No es un
                valor válido.
              </span>
            ) : (
              <span id="valorPoliza"> Precio estimado: ${precioEstimado} </span>
            )}
            <span className="guardar ocultar" title="Guardar en historial">
              💾
            </span>
          </p>
        </div>
        {/* Precio Estimado */}
      </form>
    </>
  );
};

export default Cotizador;
