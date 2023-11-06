import React from 'react'
import { Link } from 'react-router-dom'

const BotonHistorial = () => {
  return (
    <div className="historial">
      <Link to="/historial" >
        <span title="Ver Historial">📋</span>
      </Link>
    </div>
  )
}

export default BotonHistorial