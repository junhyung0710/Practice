import './App.css';
import Scene from './Scene.js'
import { Canvas }from '@react-three/fiber'
import { Physics } from "@react-three/cannon";

function App() {
  return (
    <div className="App">
      <Canvas>
        <Physics
        broadphase = "SAP"
        gravity = {[0, -2.6, 0]}
        >
          <Scene/>
        </Physics>
      </Canvas>
      
    </div>
  );
}

export default App;
