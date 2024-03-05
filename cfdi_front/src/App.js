import './App.css';
import { Button} from 'react-bootstrap';
import React, {useEffect, useState } from 'react';
import axios from 'axios';

// const MyComponent = () => {
//     const [data, setData] = useState(null);
//
//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/api/hola');
//             setData(response.data);
//         } catch (error) {
//             console.error('Error al obtener datos:', error);
//         }
//     };
//
//     return (
//         <div>
//             <button onClick={fetchData}>Obtener Datos</button>
//             {data && <p>{data}</p>}
//         </div>
//     );
// };

function App() {
  return (
      <div className="App">
        <header className="App-header">
            <Button
                onClick={() => {
                    MyComponent()
                }}
            >
                Click click
            </Button>

            <Button variant="contained">Contained</Button>

        </header>
      </div>
  );
}

function hola(){

    var xhr = new XMLHttpRequest();

    var miNombre = "Gail";

    xhr.responseType = 'text';

    xhr.open("GET", "http://localhost:8080/hola?" + "miNombre=" + miNombre, true );

    xhr.onload = function () {
        var json = JSON.parse(xhr.response);
        console.log(json.url);
        // addAlert("Reporte generado correctamente", json.url)
    }

    xhr.send(null);

}



// const MyComponent = () => {
//     const [datos, setDatos] = useState([]);
//
//     const fetchData = () => {
//         fetch('http://localhost:8080/api/hola')
//             .then(response => response.json())
//             .then(data => {
//                 setDatos(data);
//                 console.log(data);
//             })
//             .catch(error => {
//                 console.error('Error al obtener datos:', error);
//             });
//     };
//
//     return (
//         <div>
//             <h1>My Component</h1>
//             <button onClick={fetchData}>Obtener Datos</button>
//             {/* Agrega este botón */}
//             <div>
//                 <h2>Users</h2>
//                 <ul>
//                     {users.map(user => (
//                         <li key={user.id}>{user.name}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

const MyComponent = () => {
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/api/hola')
            .then(response => response.json())
            .then(data => {
                setMensaje(data.mensaje); // Actualiza el estado con el mensaje obtenido
            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
            });
    }, []);

    return (
        <div>
            <h1>Mi Componente</h1>
            <p>{mensaje}</p>
        </div>
    );
};

// const MyComponent = () => {
//
//     var datos
//
//     useEffect(() => {
//         fetch('<http://localhost:8080/api/hola>')
//             .then(response => response.json())
//             .then(data => {
//                 datos = data
//                 console.log(data); // Aquí obtienes la respuesta del servidor
//             })
//             .catch(error => {
//                 console.error('Error al obtener datos:', error);
//             });
//     }, []);
//
//     return (
//         <div>
//             <h1>My Component</h1>
//             <h1>{datos}</h1>
//         </div>
//     );
//
// };

// export default App;
export default MyComponent;
