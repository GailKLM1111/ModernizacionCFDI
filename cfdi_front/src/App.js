import './App.css';
import React from 'react';
import { Button} from 'react-bootstrap';

function App() {
  return (
      <div className="App">
        <header className="App-header">
            <Button
                onClick={() => {
                    hola()
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

export default App;
