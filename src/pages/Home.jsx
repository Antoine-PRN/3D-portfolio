import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect, useRef } from 'react';
import Loader from '../components/Loader';
import Island from '../models/island';
import Sky from '../models/Sky';
import Bird from '../models/bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';
import magical_fantasy from '../assets/magical_fantasy.mp3';
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  const audioRef = useRef(new Audio(magical_fantasy));
  audioRef.current.volume = 0.3;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustIslandToScreenSize = () => {
    let screenScale = null;
    let screenPosition = [-5.5, -7.5, -115];
    let rotation = [0.15, -0.5, 0.01];

    if (window.innerWidth <= 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneToScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth <= 768) {
      screenScale = [0.002, 0.002, 0.002];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [0.003, 0.003, 0.003];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandToScreenSize();
  const [planeScale, planePosition] = adjustPlaneToScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2.5} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor={'#b1e1ff'} groundColor={'#000000'} intensity={1} />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            position={planePosition}
            scale={planeScale}
            isRotating={isRotating}
            rotation={[1.35, 9.4, 0]}
          />
        </Suspense>
      </Canvas>
      <div className='absolute left-2 bottom-2'>
        <img src={!isPlayingMusic ? soundoff : soundon}
          alt='sound'
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home