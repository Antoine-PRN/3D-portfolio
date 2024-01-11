/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Mathias Tossens (https://sketchfab.com/mathiastossens)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sopwith-dolphin-stylized-plane-7f229f1805c64ee491e0fda9844e053b
Title: Sopwith-Dolphin stylized plane
*/
import { useGLTF, useAnimations } from "@react-three/drei";
import { a } from "@react-spring/three";
import { useRef, useEffect } from "react";
import planeScene from "../assets/3d/plane.glb";

const Plane = ({ isRotating, ...props }) => {
  const planeRef = useRef();
  const { nodes, materials, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, planeRef);

  // console.log(actions);

  useEffect(() => {
    actions['Scene'].play();
  }, [])

  return (
    <a.group ref={planeRef} {...props} dispose={null}>
      <a.group
        name="Sketchfab_model"
      >
        <a.group
          name="66ed068476bd44969399c6dc3ab8836ffbx"
          rotation={[Math.PI / 2, 0, 0]}
        >
          <a.group name="Object_2">
            <a.group name="RootNode">
              <a.group
                name="Plane000"
                position={[-184.02, 293.073, -3.47]}
                rotation={[-1.571, 0, 0]}
                scale={100}
              >
                <mesh
                  name="Plane000_Material_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane000_Material_0.geometry}
                  material={materials.Material}
                />
              </a.group>
              <a.group
                name="Cylinder004"
                position={[0, 0, 0.003]}
                rotation={[-1.571, 0, 0]}
                scale={100}
              >
                <mesh
                  name="Cylinder004_Material_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder004_Material_0.geometry}
                  material={materials.Material}
                />
              </a.group>
              <a.group
                name="Cube007"
                position={[0, 0, 0.003]}
                rotation={[-1.571, 0, 0]}
                scale={100}
              >
                <mesh
                  name="Cube007_Material_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube007_Material_0.geometry}
                  material={materials.Material}
                />
              </a.group>
              <a.group
                name="Cylinder013"
                position={[0, 0, 0.003]}
                rotation={[-1.571, 0, 0]}
                scale={100}
              >
                <mesh
                  name="Cylinder013_Material_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder013_Material_0.geometry}
                  material={materials.Material}
                />
              </a.group>
              <a.group
                name="Cylinder008"
                position={[-623.364, 95.01, -1.104]}
                rotation={[-0.874, 0, 0]}
                scale={147.558}
              >
                <mesh
                  name="Cylinder008_Material_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder008_Material_0.geometry}
                  material={materials.Material}
                />
              </a.group>
              <a.group
                name="Cylinder009"
                position={[0, 0, 0.003]}
                rotation={[-1.571, 0, 0]}
                scale={100}
              >
                <mesh
                  name="Cylinder009_Material_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder009_Material_0.geometry}
                  material={materials.Material}
                />
              </a.group>
              <a.group
                name="Cube001"
                position={[0, 0, 0.003]}
                rotation={[-1.571, 0, 0]}
                scale={100}
              >
                <mesh
                  name="Cube001_Material_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube001_Material_0.geometry}
                  material={materials.Material}
                />
              </a.group>
              <a.group
                name="Cube004"
                position={[0, 0, 0.003]}
                rotation={[-1.571, 0, 0]}
                scale={100}
              >
                <mesh
                  name="Cube004_Material_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube004_Material_0.geometry}
                  material={materials.Material}
                />
              </a.group>
              <a.group
                name="Cylinder012"
                position={[0, 0, 0.003]}
                rotation={[-1.571, 0, 0]}
                scale={100}
              >
                <mesh
                  name="Cylinder012_Material_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder012_Material_0.geometry}
                  material={materials.Material}
                />
              </a.group>
              <a.group
                name="Plane002"
                position={[0, 0, 0.003]}
                rotation={[-1.571, 0, 0]}
                scale={100}
              >
                <mesh
                  name="Plane002_Material_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane002_Material_0.geometry}
                  material={materials.Material}
                />
              </a.group>
            </a.group>
          </a.group>
        </a.group>
      </a.group>
    </a.group>
  );
}

export default Plane;
