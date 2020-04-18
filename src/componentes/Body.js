import React, {Fragment, useState } from 'react';


const Registro = (props) => {
    const {usuario, guardarUsuario, contrasena, guardarContrasena,} = props;

    const[error, guardarError,  ] = useState(false);

 const guardarDatos = e => {
     e.preventDefault();
     console.log('Cargando datos...'); 

    //Validación
    if (usuario === '' || contrasena === ''){
        guardarError(true);
        console.log('Falta completar datos')
        return;

    } 
 

    //Eliminar error previo
    guardarError(false)

 
    }

    return ( //onSubmit sirve para guardar los datos que el usuario ingrese
       <Fragment>
       <form onSubmit={guardarDatos}>
            
          <div className="row">
              <div>
                  <label>Usuario </label>
                  <input 
                      className="u-full-width" 
                      type="text" 
                      placeholder="Ingrese su Nombre" 
                      onChange={e => guardarUsuario ((e.target.value ) ) }

                      //onChange permite guardar los datos recibidos
                      // <=También se puede poner la e dentro de estas llaves
                  />
              </div>

              <div>
                    <label>Contraseña </label>
                    <input 
                    className="u-full-width"
                    type="password"
                    onChange={e => guardarContrasena ((e.target.value ) ) }
                    />
                </div>
              
              <div>
                  <input 
                      type="submit"  
                      value="Ingresar " 
                      className="button-primary u-full-width" 
                  />
              </div>

          </div>
  </form>

  { (error) ? <p className="error">Todos los campos son Obligatorios</p> : '' }

 
  </Fragment>  //type text o number define la casilla
  //En caso de que error marque como true mostrará error, caso contrario no mostrará nada
    );
}

export default Registro;