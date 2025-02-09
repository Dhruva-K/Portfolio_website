import { Sphere, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { Color, Depth, Gradient, LayerMaterial, Noise } from "lamina";
import { useEffect, useRef } from "react"
import * as THREE from "three"

export const Background = ()=>{
    const ref = useRef();
    const BG_SPEED = 0.4;

    useFrame((_state, delta) => {
        ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z +=
            delta * BG_SPEED;
    });

    useEffect(()=>{
        console.log(ref);
    },[])

    return(
        <mesh scale={100} ref={ref}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial side={THREE.BackSide}>
        <Depth
          colorA="#4E1878"
          colorB="#200734"
          alpha={1}
          mode="normal"
          near={130}
          far={200}
          origin={[100, 100, -100]}
        />
        </LayerMaterial>
      </mesh>
    );
};