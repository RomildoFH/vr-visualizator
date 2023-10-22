import React from 'react';
import './App.css';
import 'aframe';

function App() {
  return (
    <div className="App">
      <h1>Seja bem-vindo</h1>
      <div className="image-contaienr">
        <img src="https://i.postimg.cc/zvBNZc66/CwIEU.jpg" alt="imagem"/>
        <a-scene embedded>
          <a-sky src="https://i.postimg.cc/zvBNZc66/CwIEU.jpg" rotation="0 -90 0"></a-sky>
        </a-scene>
      </div>      
    </div>
  );
}

export default App;
