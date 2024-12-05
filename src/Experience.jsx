import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import Model from './components/three/Model'
import Lights from './components/three/Lights'
import { useRef, useEffect, useContext } from 'react'
import AppContext from './context/AppContext'
import { BrightnessContrast, ColorAverage, DepthOfField } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { EffectComposer } from '@react-three/postprocessing'
import Effects from './components/three/Effects'


export default function Experience() {

    const modelRef = useRef()
    const context = useContext(AppContext)
    // const mesh = context?.mesh
    // const setAllGroups = context?.setAllGroups

    // useEffect(() => {
    //     if (mesh) {
    //         const children = mesh.group.current.children[0].children
    //         const findGroups = (children) => {
    //             let groups = []
    //             children.forEach(child => {
    //                 if (child.type === 'Group') {
    //                     groups.push(child)
    //                     groups = groups.concat(findGroups(child.children))
    //                 }
    //             })
    //             return groups
    //         }

    //         const groups = findGroups(children)
    //         setAllGroups(groups)
    //     }
    // }, [mesh, setAllGroups])

    return <>
        <Canvas
            gl={{
                antialias: true,
                alpha: false,
                preserveDrawingBuffer: true,
                logarithmicDepthBuffer: true
            }}
            camera={{
                fov: 25,
                near: 0.1,
                far: 1000,
                position: [0.541, 0.255, 0.320]
            }}
            shadows
        >
            <color attach="background" args={['#EAE9E9']} />

            <EffectComposer>
                <BrightnessContrast
                    brightness={0.1}
                    contrast={0.4}
                />
                <Effects />
            </EffectComposer>

            <Lights />
            <OrbitControls makeDefault
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2}
            />
            <Model ref={modelRef} position={[-0.0851, 0, 0.047]} />

        </Canvas>
    </>
}
