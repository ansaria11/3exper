import React, {useRef, useEffect} from "react"
import {Canvas, useFrame} from "@react-three/fiber"
import { useGLTF, OrbitControls, PerspectiveCamera} from "@react-three/drei"
import {gsap} from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import cn from "clsx"
import s from "./aceoff.module.scss"
import { MathUtils } from "three"
import { useLenis } from "@studio-freight/react-lenis"

gsap.registerPlugin(ScrollTrigger)

export function AceOffModel() {
    const {scene: box} = useGLTF("/3exper/models/FinishedAceOffBox.glb")
    const meshRef = useRef()
    box.position.set(0, 0, 0)

    

    useFrame((state, delta) => (meshRef.current.rotation.y += delta * 0.05))
    return <primitive object={box} ref={meshRef} rotation={[-Math.PI / 10, Math.PI, 0]}/>;
}



export default function AceOff(props) {
    const plRef = useRef()
    return (
        <Canvas className={cn(s.canvas1)}>
            <AceOffModel/>
            <PerspectiveCamera makeDefault position={[0,0,2.5]}/>
            <ambientLight intensity={3}/>
            <pointLight ref={plRef} position={[0,0,6]} intensity={3}/>
        </Canvas>
    )
}


/*
    const animationStates = [
        { rotation: {  }, position: [0, 0, 0] },
        { rotation: {  }, position: [0, 0, 1] },
        { rotation: {  }, position: [0, 0, 2] },
        // Add more states as needed
    ];
    
    const timeframes = [
        ["top top", 500],
        [500, 1000],
        [1000, 2000]
    ]

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            markers: true,
            }
        })
        animationStates.map((state, index) => {
            tl.to(meshRef.current.rotation, {
            ...state.rotation,
            duration: 1,
            ScrollTrigger: {
                scrub: true,
                start: "+=${timeframes[index][0]}",
                end: "+=${timeframes[index][1]}",
                markers: true
            }
            }).to(meshRef.current.position, {
            x: state.position[0],
            y: state.position[1],
            z: state.position[2],
            duration: 1,
            ScrollTrigger: {
                scrub: true,
                start: "+=${timeframes[index][0]}",
                end: "+=${timeframes[index][1]}",
            }
            })
        })
    })
    */