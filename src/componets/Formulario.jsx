import React, { useState } from 'react';
// import uuid from 'uuid/v4';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';  // documentar los componentes

const Formulario = ({crearCita}) => {

    const dataInicial = {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    }

    const [cita, setCita] = useState(dataInicial);
    const [error, setError] = useState(false);

    // Extraer valores de cita
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // CAPTURAR LOS ELEMENTOS DEL FORMULARIO
    const handleChange = (e) => {
        //console.log(e.target.value);
        const { name, value } = e.target;
        //setCita({...cita, [e.target.name]: e.target.value})
        setCita({ ...cita, [name]: value })
    }


    // ENVIAR FORMULARIO PARA AGREGAR CITA
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar inputs
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            setError(true);
            return;
        }
        // Manejo del mensaje de error
        setError(false);
        // Crear ID
        // instalar antes la libraría UUID: 
        // https://www.npmjs.com/package/react-uuid
        cita.id = uuid();
        //console.log(cita);
        // Crear Cita
        crearCita(cita);
        // Resetear el formulario
        setCita(dataInicial);

    }


    return (
        <>

            <h2>Crear cita</h2>
            {
                error ?
                    (
                        <p className="alerta-error">Los campos son obligatorios</p>
                    ) : (null)
            }

            <form
                onSubmit={handleSubmit}
            >
                <label>Nombre de mascota:</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange={handleChange}
                    value={mascota}
                />

                <label>Nombre del dueño:</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño de la mascota"
                    onChange={handleChange}
                    value={propietario}
                />

                <label>Fecha de alta:</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />

                <label>Hora de alta:</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />

                <label>Síntomas:</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    placeholder="Síntomas que presenta la mascota"
                    onChange={handleChange}
                    value={sintomas}
                >
                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>

            </form>
        </ >
    )
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;
