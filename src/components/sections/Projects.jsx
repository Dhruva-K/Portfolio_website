import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Html, Image, RoundedBox, Text } from "@react-three/drei"; // Import RoundedBox from @react-three/drei
import { useScroll, ScrollControls } from "@react-three/drei";

export const Projects = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <motion.section
      className="h-screen w-screen p-16 max-w-screen-2xl mx-auto flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.6 },
      }}
    >
      <h1 className="text-4xl text-center text-white mb-12">Projects</h1>
      <motion.div
        className="carousel-container w-full h-4/5 mx-auto overflow-hidden"
        ref={carousel}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Canvas camera={{ position: [0, 0, 12], fov: 70 }}>
          <Carousel radius={7.5} count={7} />
        </Canvas>
      </motion.div>
    </motion.section>
  );
};

function Carousel({ radius = 7, count = 6 }) {
  const group = useRef();
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Update the rotation based on whether a card is hovered or not
  useFrame(() => {
    if (!isHovered) {
      setRotationAngle((prev) => prev + 0.002); // Slower rotation when no card is hovered
    }
  });

  return (
    <group ref={group}>
      {Array.from({ length: count }, (_, i) => (
        <Card
          key={i}
          url={`project-images/project${i + 1}.png`} // Replace with your project image URLs
          position={[
            Math.sin((i / count) * Math.PI * 2 + rotationAngle) * radius, // X position in circular path
            0, // Y position remains constant
            Math.cos((i / count) * Math.PI * 2 + rotationAngle) * radius, // Z position in circular path
          ]}
          onHover={(hovered) => setIsHovered(hovered)} // Update hover state
          onClick={() => handleCardClick(i)} // Handle click event
        />
      ))}
    </group>
  );
}

function Card({ url, position, onHover, onClick }) {
  const ref = useRef();

  // Handle hover events to stop/start the rotation
  const handlePointerOver = () => onHover(true);
  const handlePointerOut = () => onHover(false);

  return (
    <mesh
      ref={ref}
      position={position}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={onClick}
      scale={[1.5, 1.5, 1]} // Adjust size for better visibility
    >
      {/* Use RoundedBox from @react-three/drei */}
      <RoundedBox args={[2, 2.5, 0.1, 12]} /> {/* Create a box with rounded corners */}
      <meshStandardMaterial color="white" />
      {/* Image Section */}
      <Image
        url={url}
        scale={[1.7, 1.2, 1]}
        position={[0, 0.5, 0.1]} // Position the image section
      />
      {/* Description Section */}
          {/* Description Section */}
       <group position={[0, -0.5, 0.05]}>
        {/* Use Text for adding 3D text */}
        <Text
          fontSize={0.25} // Adjust the font size as needed
          position={[0, 0, 0.1]} // Position the text within the card
          color="black" // Set text color
          anchorX="center"
          anchorY="middle"
        >
          Temp
        </Text>
      </group>
    </mesh>
  );
}




