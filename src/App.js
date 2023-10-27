import React, { useRef, useState } from 'react';
import { PiVirtualRealityFill } from 'react-icons/pi'
import { TbAugmentedReality } from 'react-icons/tb'
import './App.css';
import 'aframe';

function App() {
  const sceneRef = useRef(null);
  const [url, setUrl] = useState('https://i.postimg.cc/d3LCTf90/vr-example-fixed.jpg');
  const [vrUrl, setVrUrl] = useState('https://i.postimg.cc/cLG1H8dN/Panorama-piscina.jpg');

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
    <main className="App">
      <h1>Seja bem-vindo</h1>
      <section id="image-preview-container">
        <div className="image-container">
          <img
            src={url}
            alt="Imagem 360"
            onClick={handleEnterVRClick}
            className="image-preview"
          />
          <div className="image-controllers">
            <button onClick={handleEnterVRClick} className="controller">
              <PiVirtualRealityFill size={50} />
            </button>
            <button onClick={handleEnterARClick} className="mobile-only controller">
              <TbAugmentedReality size={50} />
            </button>
          </div>
        </div>
        <p>Para visualizar a imagem, clique nela ou em algum dos botões ao lado</p>
      </section>
        <a-scene ref={sceneRef} embedded vr-mode-ui="enabled: false">
          <a-sky src={vrUrl} rotation="0 -90 0"></a-sky>
        </a-scene>
    </main>
  );
}

export default App;
