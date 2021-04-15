import React, { useState } from 'react';
import '../index.css';

// instalar antes la libraría UUID: 
// https://www.npmjs.com/package/react-uuid
import uuid from 'react-uuid';
import PropTypes from 'prop-types';  // documentar los componentes

const Formulario = ({crearCita}) => {

    const dataInicial = {
        producto: '',
        propietario: '',
        fecha: '',
        hora: '',
        fallas: ''
    }

    const [cita, setCita] = useState(dataInicial);
    const [error, setError] = useState(false);

    // Extraer valores de cita
    const { producto, propietario, fecha, hora, fallas } = cita;

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
        if (producto.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || fallas.trim() === '') {
            setError(true);
            return;
        }
        // Manejo del mensaje de error
        setError(false);
        // Crear ID
        cita.id = uuid();
        // Crear Cita
        crearCita(cita);
        // Resetear el formulario
        setCita(dataInicial);

    }


    return (
        <>

            <h2>Ingresar producto</h2>
            {
                error ?
                    (
                        <p className="alerta-error">Los campos son obligatorios</p>
                    ) : (null)
            }

            <form
                onSubmit={handleSubmit}
                className="form-border"
            >
                <label>Producto:</label>
                <input
                    type="text"
                    name="producto"
                    className="u-full-width"
                    placeholder="Producto"
                    onChange={handleChange}
                    value={producto}
                />

                <label>Propietario:</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño del producto"
                    onChange={handleChange}
                    value={propietario}
                />

                <label>Fecha de ingreso:</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />

                <label>Hora de ingreso:</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />

                <label>Fallas:</label>
                <textarea
                    name="fallas"
                    className="u-full-width"
                    placeholder="Fallas que presenta el producto"
                    onChange={handleChange}
                    value={fallas}
                >
                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar producto</button>
            </form>
        </ >
    )
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;
