/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 src/assets/3d/cartoon_plane.glb 
Author: johnchristian26 (https://sketchfab.com/johnchristian26)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cartoon-plane-abb39b6c8357468ca7d2f55233876bfd
Title: Cartoon Plane
*/

import { useGLTF, useAnimations } from "@react-three/drei";
import { a } from "@react-spring/three";
import { useRef, useEffect } from "react";
import planeScene from "../assets/3d/cartoon_plane.glb";

export default function Cartoon_plane({ isRotating, ...props }) {
  const planeRef = useRef();
  const { nodes, materials, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, planeRef);


  useEffect(() => {
    actions['Animation'].play();
  }, [])

  return (
    <a.group ref={planeRef} {...props} dispose={null}>
      <a.group name="Sketchfab_Scene">
        <a.group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <a.group name="root">
            <a.group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <a.group name="proppeller_0" position={[0, 0, 1.628]}>
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.material_0} />
              </a.group>
              <a.group name="Plane_Controller_9">
                <a.group name="Body_1" rotation={[Math.PI / 2, 0, 0]}>
                  <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['Material.002']} />
                  <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['Material.002']} />
                </a.group>
                <a.group name="Body002_2" rotation={[Math.PI / 2, 0, 0]}>
                  <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials['Material.003']} />
                </a.group>
                <a.group name="Glass_3" rotation={[Math.PI / 2, 0, 0]}>
                  <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials['Material.001']} />
                </a.group>
                <a.group name="Plane-Tail_4" position={[0, 0, 0.998]} rotation={[0, 0, -Math.PI / 2]}>
                  <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials['Material.004']} />
                </a.group>
                <a.group name="Proppeller_5" rotation={[Math.PI / 2, 0, 0]}>
                  <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials['Material.004']} />
                  <mesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials['Material.004']} />
                  <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials['Material.004']} />
                  <mesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials['Material.005']} />
                  <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials['Material.005']} />
                </a.group>
                <a.group name="Wing-01_6" rotation={[Math.PI / 2, 0, 0]}>
                  <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials['Material.004']} />
                </a.group>
                <a.group name="Wing-01001_7" rotation={[Math.PI / 2, 0, 0]}>
                  <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials['Material.002']} />
                  <mesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials['Material.005']} />
                </a.group>
                <a.group name="Wing-02_8" rotation={[Math.PI / 2, 0, 0]}>
                  <mesh name="Object_27" geometry={nodes.Object_27.geometry} material={materials['Material.003']} />
                </a.group>
              </a.group>
              <a.group name="Empty_13" position={[6.444, -1.23, -3.5]}>
                <a.group name="Gun-01_10" position={[-2.406, 3.847, -0.771]} rotation={[Math.PI / 2, 0, 0]} scale={0.148}>
                  <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials['Material.003']} />
                  <mesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials['Material.003']} />
                  <mesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials['Material.003']} />
                  <mesh name="Object_33" geometry={nodes.Object_33.geometry} material={materials['Material.003']} />
                  <mesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials['Material.003']} />
                  <mesh name="Object_35" geometry={nodes.Object_35.geometry} material={materials['Material.003']} />
                  <mesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials['Material.003']} />
                  <mesh name="Object_37" geometry={nodes.Object_37.geometry} material={materials['Material.003']} />
                  <mesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials['Material.003']} />
                  <mesh name="Object_39" geometry={nodes.Object_39.geometry} material={materials['Material.003']} />
                  <mesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials['Material.003']} />
                  <mesh name="Object_41" geometry={nodes.Object_41.geometry} material={materials['Material.003']} />
                  <mesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials['Material.003']} />
                </a.group>
                <a.group name="Gun-02_11" position={[-2.406, 3.402, -0.245]} rotation={[Math.PI / 2, 0, 0]} scale={1.691}>
                  <mesh name="Object_44" geometry={nodes.Object_44.geometry} material={materials['Material.004']} />
                </a.group>
                <a.group name="Gun-03_12" position={[-2.406, 3.402, -0.071]} rotation={[Math.PI / 2, 0, 0]} scale={1.691}>
                  <mesh name="Object_46" geometry={nodes.Object_46.geometry} material={materials['Material.004']} />
                </a.group>
              </a.group>
            </a.group>
          </a.group>
        </a.group>
      </a.group>
    </a.group>
  )
}

useGLTF.preload('/cartoon_plane.glb')
