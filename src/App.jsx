import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Environment, Scroll, ScrollControls, Sphere, ContactShadows } from "@react-three/drei";
import { Interface } from "./components/Interface";
import * as THREE from 'three'
import { LayerMaterial, Depth, Noise } from "lamina";


function App() {
  return (
    // <div className = {`
    // h-screen  bg-gradient-to-r from-blue-950  to-blue-800
    // `}>
    <>
      <Canvas shadows camera={{ position: [2,1,5], fov: 30 }}>
      
      <ScrollControls pages={6} damping={0.1}>
        <Experience />
        <Scroll html>
          <Interface/>
        </Scroll>
      </ScrollControls>
      <ContactShadows position={[0, -1.4, 0]} opacity={1} scale={10} blur={2} far={4} />

      {/* <Environment background resolution={64}>
      <Sphere>
      <LayerMaterial
        color="#ffffff" //
        lighting="physical"
        transmission={1}
      >
        <Depth
          colorA="#810000" //
          colorB="#ffd0d0"
          alpha={0.5}
          mode="multiply"
          near={0}
          far={2}
          origin={[1, 1, 1]}
        />
      </LayerMaterial>
    </Sphere>
      </Environment> */}
    </Canvas>
    </>
    // </div>
  );
}

function Striplight(props) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial color="white" />
    </mesh>
  )
}

export default App;
