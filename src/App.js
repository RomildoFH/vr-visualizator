import React from 'react';
import './App.css';
import 'aframe';

function App() {
  return (
    <div className="App">
      <h1>Seja bem-vindo</h1>
      <div className="image-contaienr">
        <img src="https://i.postimg.cc/cLG1H8dN/Panorama-piscina.jpg" alt="imagem"/>
        <a-scene embedded>
          <a-sky src="https://i.postimg.cc/cLG1H8dN/Panorama-piscina.jpg" rotation="0 -90 0"></a-sky>
        </a-scene>
      </div>      
    </div>
  );
}

export default App;
