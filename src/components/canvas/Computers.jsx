import { Canvas } from '@react-three/fiber'
import {React, Suspense, useEffect, useState} from 'react'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ( {isMobile} ) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={2.5} groundColor="black"/>
      <pointLight intensity={0.5}/>

      <primitive 
        object={computer.scene}
        scale = {isMobile? 0.3: 0.5}
        position={isMobile? [0, -2.8, -1.7]:[0, 3.25, 1.5]}
        rotation = {[-0.01, -0.2, -0.1]}/>
    </mesh>
  )
}

  const ComputerCanvas = () =>{
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=> {
      const mediaQuery = window.matchMedia('(max-width: 80%)');

      setIsMobile(mediaQuery.matches);
      
      const handledMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      }
      mediaQuery.addEventListener('change', handledMediaQueryChange);

      return() => {
        mediaQuery.removeEventListener('change', handledMediaQueryChange);
      }
    }, [])
    return(
      <Canvas
        frameLoop='demand'
        shadows
        camera={{position: [20,3,5], fov: 25}}
        gl = {{preserveDrawingBuffer: true}}>
          <Suspense fallback={<CanvasLoader/>}>
            <OrbitControls 
              enableZoom={false}
              maxPolarAngle={Math.PI/2}
              minPolarAngle={Math.PI / 2}/>
              <Computers isMobile={isMobile}/> 
          </Suspense>
        <Preload all/>
      </Canvas>
    )
  }

export default ComputerCanvas