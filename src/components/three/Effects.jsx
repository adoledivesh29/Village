import { useThree, useFrame } from '@react-three/fiber'
import { EffectComposer, N8AO, Outline, TiltShift2, ToneMapping } from '@react-three/postprocessing'
import { easing } from 'maath'

export default function Effects() {
    const { size } = useThree()

    useFrame((state, delta) => {
        // Default camera position values
        const defaultX = 0.541;
        const defaultY = 0.255;

        // Clamp pointer values between -1 and 1, and add smoothing
        const pointerX = Math.max(-1, Math.min(1, !isNaN(state.pointer.x) ? state.pointer.x : 0));
        const pointerY = Math.max(-1, Math.min(1, !isNaN(state.pointer.y) ? state.pointer.y : 0));

        // Reduce movement intensity and increase dampening
        easing.damp3(
            state.camera.position,
            [defaultX + pointerX / 40, defaultY + pointerY / 40, 0.320],
            0.25,
            delta
        )
        state.camera.lookAt(0, 0, 0)
    })

    return (
        <EffectComposer>
            <N8AO halfRes aoSamples={5} aoRadius={0.4} distanceFalloff={0.75} intensity={1} />
            <ToneMapping toneMapping={ToneMapping.Reinhard} />
        </EffectComposer>
    )
}