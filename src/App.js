import React, { useRef, useState } from 'react';
import { PiVirtualRealityFill } from 'react-icons/pi'
import { TbAugmentedReality } from 'react-icons/tb'
import './App.css';
import 'aframe';

function App() {
  const sceneRef = useRef(null);
  const [url, setUrl] = useState('https://i.postimg.cc/L5sj7j2D/Dia-3-Foto.jpg');
  const [vrUrl, setVrUrl] = useState('https://i.postimg.cc/RZG4CfBK/VR-Piscina.jpg');

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
        <img src="https://cdn.pixabay.com/photo/2016/12/16/13/50/vr-1911451_1280.png" alt="homem-com-oculos-vr" className="decorator" />
    </main>
  );
}

export default App;
