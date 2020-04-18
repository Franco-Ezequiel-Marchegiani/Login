import React, {Fragment, useState} from 'react';
import Header from './componentes/Header';
import Body from './componentes/Header';
import Formulario from './componentes/Body';


function App() {
  //Define el state, conviene ponerlo aquí que es el comp. padre
  const [usuario, guardarUsuario] = useState('');
  const [contrasena,guardarcontrasena ] = useState('');

    return (
      <Fragment>
            <Header
                titulo="Login Usuario" //funcion props, se pueden agregar varios props
            />

        <div className="container">
          <Formulario 
          usuario={usuario}
          guardarUsuario={guardarUsuario}
          contrasena={contrasena}
          guardarContrasena={guardarcontrasena}   
          />
          
        </div>
        </Fragment>
    );
} 

export default App;