import React, {useState, useEffect} from 'react';
import Footer from './componets/Footer';
import Formulario from "./componets/Formulario";
import Header from './componets/Header';
import ListarCitas from './componets/ListarCitas';


function App() {

  // CITAS DE LOCALSTORAGE.  Solo almacena string
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  // ARREGLO DE CITAS
  const [todasCitas, setTodasCitas] = useState(citasIniciales);

  // ESCUCHAR CADA VEZ QUE CAMBIE TODASCITAS.  Cambios en el state
  useEffect( () => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(todasCitas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [todasCitas] );

  // CREAR NUEVA CITA Y AGREGARLA AL ARREGLO DE TODAS LAS CITAS
  const crearCita = (cita) => {
    setTodasCitas([...todasCitas, cita]);
  }

  // ELIMINAR CITAS POR ID
  const eliminarCita = (id) =>{
    const nuevasCitas = todasCitas.filter( nueva => nueva.id !== id);
    setTodasCitas(nuevasCitas);
  }

  return (
    <>
      <Header />

      <div className="container container-body">
        <div className="row">

          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>

          <div className="one-half column">
            <ListarCitas
              todasCitas={todasCitas}
              eliminarCita={eliminarCita}  
            />
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
