import React from 'react'
import { useControls } from 'leva'

export default function Lights() {
    const { ambientColor, ambientIntensity, directionalColor, directionalIntensity, position } = useControls('Lights', {
        ambientColor: '#ffffff',
        ambientIntensity: { value: 0.7, min: 0, max: 5, step: 0.1 },
        directionalColor: '#ffffff',
        directionalIntensity: { value: 0.7, min: 0, max: 5, step: 0.1 },
        position: { value: [4, 41, 1], step: 1 }
    })

    return (
        <>
            <ambientLight intensity={ambientIntensity} color={ambientColor} />
            <directionalLight
                position={position}
                intensity={directionalIntensity}
                color={directionalColor}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-left={-0.5}
                shadow-camera-right={0.5}
                shadow-camera-top={0.5}
                shadow-camera-bottom={-0.5}
            />
        </>
    )
}

