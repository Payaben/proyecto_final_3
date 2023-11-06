import datos from "../../../json/datos.json"
// const costoM2 = 35.86

function Cotizador_Function(costoM2 = 35.86, param_propiedad, param_ubicacion, metros2) {
    let factor_propiedad, factor_ubicacion = 0

    datos.filter((element, indice) => {
        if (element.tipo === param_propiedad) {
            factor_propiedad = parseFloat(element.factor)
        }
        if (element.tipo === param_ubicacion) {
            factor_ubicacion = parseFloat(element.factor)
        }
        return [factor_propiedad, factor_ubicacion]
    })

    const resultado = (
        (costoM2) *
        (factor_propiedad) *
        (factor_ubicacion) *
        (metros2))
        .toFixed(2)


    return resultado

}

export { Cotizador_Function }
