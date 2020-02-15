import React from 'react';
import './App.css';
import Navigation from './components/navigation/navigation.js'
import Logo from './components/logo/Logo.js'
import Rank from './components/rank/Rank.js'
import ImageLinkForm from './components/imagelinkform/ImageLinkForm.js'
import FaceRecognition from './components/facerecognition/FaceRecognition.js'
import Particles from 'react-particles-js';

const particleOptions = {
  "particles": {
    "number": {
        "value": 150,
        "density": {
            "enable": true
        }
    },
    "size": {
        "value": 10,
        "random": true,
        "anim": {
            "speed": 3,
            "size_min": 2
        }
    },
    "line_linked": {
        "enable": true
    },
    "move": {
        "random": true,
        "speed": 0.6,
        //"direction": "bottom",
        "out_mode": "out"
    }
},
"interactivity": {
    "events": {
        "onclick": {
            "enable": false,
            "mode": "repulse"
        }
    },
    "modes": {
        "repulse": {
            "distance": 400,
            "duration": 1
        }
    }
}
}

function App() {
  return (
    <div className="App">
      <Particles className='particles'
          params={particleOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      <FaceRecognition />
    </div>
  );
}

export default App;
