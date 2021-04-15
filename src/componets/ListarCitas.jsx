import React from 'react';
import PropTypes from 'prop-types';  // documentar los componentes

const ListarCitas = ({ todasCitas, eliminarCita }) => {
    return (
        <div>
            {
                todasCitas.length === 0 ?
                (
                    <h2>No hay productos.  Agregue un nueva producto</h2>
                    )
                    :
                    (
                        <>
                            <h2>Lista de productos</h2>
                            {
                                todasCitas.map((item) => (
                                    <div key={item.id} className="cita">
                                        <p>Producto: <span className="items-format">{item.producto}</span></p>
                                        <p>Dueño: <span className="items-format">{item.propietario}</span></p>
                                        <p>Fecha ingreso: <span className="items-format">{item.fecha}</span></p>
                                        <p>Hora ingreso: <span className="items-format">{item.hora}</span></p>
                                        <p>Fallas: <span className="items-format">{item.fallas}</span></p>

                                        <button
                                            className="button eliminar u-full-width"
                                            onClick={() => eliminarCita(item.id)}
                                        >
                                            Eliminar <i className="bi bi-x-circle-fill"></i>
                                        </button>
                                    </div>
                                ))
                            }
                        </>
                    )
            }
        </div>
    )
}

ListarCitas.propTypes = {
    todasCitas: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default ListarCitas;
