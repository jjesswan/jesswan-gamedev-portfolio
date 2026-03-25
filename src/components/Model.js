import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const wobble = (state) => Math.sin(1000 + state.clock.elapsedTime) * Math.PI


export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/images/sphere_mesh.gltf");

  useFrame((state) => {
    const {position} = group.current;
    position.y += wobble(state) / 900;

  })
     return (
       <group ref={group} {...props} dispose={null}>
         <mesh
           castShadow
           receiveShadow
           geometry={nodes.Sphere.geometry}
           material={materials["Material.005"]}
           position={[-2.436, -1.335, -0.153]}
           rotation={[0, 0.139, 0.302]}
           scale={[3.613, 3.425, 3.613]}
         />
         <mesh
           castShadow
           receiveShadow
           geometry={nodes.Cylinder.geometry}
           material={materials["Material.002"]}
           position={[-3.368, 2.285, -0.022]}
           rotation={[3.031, -0.461, 2.807]}
           scale={[-0.139, -0.603, -0.139]}
         />
         <mesh
           castShadow
           receiveShadow
           geometry={nodes.Plane.geometry}
           material={materials["Material.002"]}
           position={[-2.579, 2.366, -0.143]}
           rotation={[-2.885, -0.153, 0.109]}
           scale={1.273}
         />
         <mesh
           castShadow
           receiveShadow
           geometry={nodes.Plane001.geometry}
           material={materials["Material.002"]}
           position={[-3.593, 2.942, 0.744]}
           rotation={[-2.434, 1.346, -0.501]}
           scale={[1.142, 1.035, 0.931]}
         />
         <mesh
           castShadow
           receiveShadow
           geometry={nodes.Sphere002.geometry}
           material={materials["Material.007"]}
           position={[4.545, -4.18, -0.242]}
           rotation={[1.563, -1.499, 1.325]}
           scale={[3.613, 3.425, 3.613]}
         />
         <mesh
           castShadow
           receiveShadow
           geometry={nodes.Cylinder002.geometry}
           material={materials["Material.008"]}
           position={[4.288, -0.6, 0.811]}
           rotation={[-2.718, 1.208, 2.944]}
           scale={[-0.139, -0.603, -0.139]}
         />
         <mesh
           castShadow
           receiveShadow
           geometry={nodes.Plane006.geometry}
           material={materials["Material.008"]}
           position={[3.509, -0.592, 0.867]}
           rotation={[0.368, 0.148, -2.658]}
           scale={[1.142, 1.035, 0.931]}
         />
         <mesh
           castShadow
           receiveShadow
           geometry={nodes.Sphere001.geometry}
           material={materials["Material.006"]}
           position={[1.96, 2.225, -4.251]}
           rotation={[-2.636, 1.138, -2.97]}
           scale={[2.903, 2.752, 2.903]}
         />
         <mesh
           castShadow
           receiveShadow
           geometry={nodes.Cylinder001.geometry}
           material={materials["Material.003"]}
           position={[2.116, 4.669, -2.51]}
           rotation={[0.588, -0.802, -0.103]}
           scale={[-0.112, -0.484, -0.112]}
         />
         <mesh
           castShadow
           receiveShadow
           geometry={nodes.Plane003.geometry}
           material={materials["Material.003"]}
           position={[1.838, 4.935, -3.028]}
           rotation={[-0.063, -1.086, 2.83]}
           scale={1.023}
         />
         <mesh
           castShadow
           receiveShadow
           geometry={nodes.Plane004.geometry}
           material={materials["Material.003"]}
           position={[2.728, 5.191, -2.3]}
           rotation={[-2.618, -0.465, 0.206]}
           scale={[0.918, 0.831, 0.748]}
         />
       </group>
     );
}

useGLTF.preload("/sphere_mesh.gltf");
