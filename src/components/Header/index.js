import React from "react"
import cn from "clsx"
import { Inter, Barlow } from "next/font/google";
import s from "./header.module.scss"
import AceOff from "@/components/AceOff"
import CustButton from "@/components/CustButton";
import { useLenis } from "@studio-freight/react-lenis";

const barlowTitle = Barlow({subsets: ["latin"], weight: "500"});
const inter = Inter({subsets: ["latin"]})

export default function Header({scrollFunc}) {
    
    return (
        <section className={cn(s.container)}>
            <div className={cn(s.textContainer, barlowTitle.className)}>
                <h1 className={cn(s.h1)}><span className={cn(s.colouredWord)}>Defeating</span> the Education Gap</h1>
                <h3 className={cn(s.h3, inter.className)}>One card at a time.</h3>
                <div className={cn(s.buttonRow)}>
                    <CustButton className={cn(s.button1)} href="mailto:ansaria@stpaulsschool.org.uk">Get In Contact</CustButton>
                    <CustButton className={cn(s.button2)} onClick={scrollFunc}>Learn More</CustButton>
                </div>
                <div className={cn(s.scrollIndicator, inter.className)}>
                    <img className={cn(s.mouseImg)} src="./images/mouse.svg"/>
                    <p className={cn(s.scrollText)}>scroll to explore</p>
                </div>
            </div>
            <div className={cn(s.boxContainer)}>
                <AceOff/>
            </div>
        </section>
    )
}
