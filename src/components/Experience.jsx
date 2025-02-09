import { Environment, Float, MeshDistortMaterial, OrbitControls, Sky, useTexture } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { Background } from "./Background";
import { PlaneGeometry } from "three";
import { useThree } from "@react-three/fiber";


export const Experience = () => {
  const {animation} = useControls({
    animation:{
      value:"Waving",
      options:["Waving","Idle","Stretch","Backflip"]
    }
  });


  return (
    <>
      {/* <Environment preset="sunset"/> */}
      <ambientLight intensity={0.8}/>

        <group position-y={-1} position-z={-1} position-x={1.5}>
          <Avatar animation={animation}/>
        </group>
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.9}
              transparent
              distort={0.4}
              speed={4}
              color="#9689FE"
            />
          </mesh>
        </Float>
        {/* <Float> */}
          <mesh scale={[3, 3, 3]} position={[1, -0.5, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={1}
              transparent
              distort={0.7}
              speed={4}
              color="#6860F2"
            />
          </mesh>
        {/* </Float> */}
      
        <Background/>
        {/* <Projects/> */}
        

      
    </>
  );
};
