/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Skylar Muffin (https://sketchfab.com/boopdesignstudio)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/stylized-3d-floating-island-and-mine-house-3cb24182a8504d439ee4e3c500565ac5
Title: Stylized 3D Floating Island And Mine House
*/

import { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

import IslandScene from '../assets/3d/Island.glb'

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const IslandRef = useRef();

  const { nodes, materials } = useGLTF(IslandScene);
  const { gl, viewport } = useThree();

  // // Add an AxesHelper after the model has been loaded
  // const axesHelper = useRef(new AxesHelper(100));

  // // Check if IslandRef has been initialized before adding the axesHelper
  // if (IslandRef.current) {
  //   IslandRef.current.add(axesHelper.current);
  // }

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;
  }

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      const delta = (clientX - lastX.current) / viewport.width;

      IslandRef.current.rotation.y += delta * 0.01 * Math.PI;

      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      IslandRef.current.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = 0.0125;
    } else if (e.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      IslandRef.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -0.0125;
    }
  }

  const handleKeyUp = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
    }
  }

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      IslandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = IslandRef.current.rotation.y;

      const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      // console.log(normalizedRotation);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 1 && normalizedRotation <= 1.40:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 2.90 && normalizedRotation <= 3.40:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 5.60 && normalizedRotation <= 6.00:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  return (
    <a.group {...props} ref={IslandRef}>
      <a.group position={[-35, 0, 20]} rotation={[0, -0.185, 0]}>
        <mesh
          geometry={nodes.Final_Bridge1_SF_Bridge_Mat001_0.geometry}
          material={materials["SF_Bridge_Mat.001"]}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_Roof_Final_0.geometry}
          material={materials.SF_Roof_Final}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_Roof_Final_0_1.geometry}
          material={materials.SF_Roof_Final}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_Roof_Final_0_2.geometry}
          material={materials.SF_Roof_Final}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_Roof_Final_0_3.geometry}
          material={materials.SF_Roof_Final}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_Rocks_Mat_0.geometry}
          material={materials.SF_Rocks_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_Windows_Mat_0.geometry}
          material={materials.SF_Windows_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_Windows_Mat_0_1.geometry}
          material={materials.SF_Windows_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_Windows_Mat_0_2.geometry}
          material={materials.SF_Windows_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_Bush_Mat_0.geometry}
          material={materials.SF_Bush_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_TreeWood_Mat_0.geometry}
          material={materials.SF_TreeWood_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_TreeWood_Mat_0_1.geometry}
          material={materials.SF_TreeWood_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_TreeLeaf_Mat_0.geometry}
          material={materials.SF_TreeLeaf_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_HouseSupport_Mat_0.geometry}
          material={materials.SF_HouseSupport_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_HouseJoins_Mat_0.geometry}
          material={materials.SF_HouseJoins_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_Chimney_Mat_0.geometry}
          material={materials.SF_Chimney_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_CutRock_Mat_0.geometry}
          material={materials.SF_CutRock_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_Stalagmites_Mat_0.geometry}
          material={materials.SF_Stalagmites_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_WoodTex_Mat_0.geometry}
          material={materials.SF_WoodTex_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_PlasterTex_Mat_0.geometry}
          material={materials.SF_PlasterTex_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_StoneBrick_Mat_0.geometry}
          material={materials.SF_StoneBrick_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_Island_Mat_0.geometry}
          material={materials.SF_Island_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_LampGlass_Mat_0.geometry}
          material={materials.SF_LampGlass_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_Lamp_Mat_0.geometry}
          material={materials.SF_Lamp_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_Candle_Mat_0.geometry}
          material={materials.SF_Candle_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_Grass_Mat_0.geometry}
          material={materials.SF_Grass_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_Rail_Mat_0.geometry}
          material={materials.SF_Rail_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_GrassCards_Mat_0.geometry}
          material={materials.SF_GrassCards_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_GrassCards_Mat_0_1.geometry}
          material={materials.SF_GrassCards_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_GrassCards_Mat_0_2.geometry}
          material={materials.SF_GrassCards_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_GrassCards_Mat_0_3.geometry}
          material={materials.SF_GrassCards_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_Sack_Mat_0.geometry}
          material={materials.SF_Sack_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_MineCart_Mat_0.geometry}
          material={materials.SF_MineCart_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_Bridge_Mat_0.geometry}
          material={materials.SF_Bridge_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_Door_Mat_0.geometry}
          material={materials.SF_Door_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_Water_Mat_0.geometry}
          material={materials.SF_Water_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_Final_Water001_0.geometry}
          material={materials["Final_Water.001"]}
        />
        <mesh
          geometry={nodes.Final_Bridge1_Final_Rocks2_Mat_0.geometry}
          material={materials.Final_Rocks2_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_Black_0.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_ButterFly_Mat_0.geometry}
          material={materials.SF_ButterFly_Mat}
        />
        <mesh
          geometry={nodes.Final_Bridge1_SF_Lillypad_Mat_0.geometry}
          material={materials.SF_Lillypad_Mat}
        />
      </a.group>
    </a.group>
  );
}

export default Island