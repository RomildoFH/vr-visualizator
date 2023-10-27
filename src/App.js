import React, { useRef } from 'react';
import './App.css';
import 'aframe';

function App() {
  const sceneRef = useRef(null);

  const handleEnterVRClick = () => {
    if (sceneRef.current) {
      sceneRef.current.enterVR();
    }
  };

  const handleEnterARClick = () => {
    if (sceneRef.current) {
      sceneRef.current.enterAR();
    }
  };

  return (
    <div className="App">
      <h1>Seja bem-vindo</h1>
      <div className="image-container">
        <img
          src="https://i.postimg.cc/d3LCTf90/vr-example-fixed.jpg"
          alt="Imagem 360"
          onClick={handleEnterVRClick}
          className="image-preview"
        />
        <button onClick={handleEnterVRClick}>Entrar no VR</button>
        <button onClick={handleEnterARClick}>Entrar no AR</button>
        <a-scene ref={sceneRef} embedded vr-mode-ui="enabled: false">
          <a-sky src="https://i.postimg.cc/cLG1H8dN/Panorama-piscina.jpg" rotation="0 -90 0"></a-sky>
        </a-scene>
      </div>
    </div>
  );
}

export default App;
