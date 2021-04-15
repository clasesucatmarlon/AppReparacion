import React from 'react';
import PropTypes from 'prop-types';  // documentar los componentes

const ListarCitas = ({ todasCitas, eliminarCita }) => {
    return (
        <div>
            {
                todasCitas.length === 0 ?
                (
                    <h2>No hay citas.  Agregue una nueva cita</h2>
                    )
                    :
                    (
                        <>
                            <h2>Lista de citas</h2>
                            {
                                todasCitas.map((item) => (
                                    <div key={item.id} className="cita">
                                        <p>Mascota: <span className="items-format">{item.mascota}</span></p>
                                        <p>Dueño: <span className="items-format">{item.propietario}</span></p>
                                        <p>Fecha: <span className="items-format">{item.fecha}</span></p>
                                        <p>Hora: <span className="items-format">{item.hora}</span></p>
                                        <p>Síntomas: <span className="items-format">{item.sintomas}</span></p>

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
