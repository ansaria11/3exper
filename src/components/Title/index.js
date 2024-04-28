import React from "react"
import cn from "clsx"
import { Inter, Barlow } from "next/font/google";
import s from "./titleicon.module.scss"
import Image from "next/image"
import CustButton from "../CustButton";

const barlowTitle = Barlow({subsets: ["latin"], weight: "600"});
const barlowSubtitle = Barlow({subsets: ["latin"], weight: "400"});

export default function Title() {
    
    return (
        <>
            <div className={cn(s.textContainer)}>
                <h1 className={cn(s.title, barlowTitle.className)}>Radians</h1>
                <h2 className={cn(s.title, s.subtitle ,barlowSubtitle.className)}>Defeating the education gap</h2>
                <div>
                    <CustButton>Our Products</CustButton>
                </div>
            </div>
            <div>
                <img src="/logo.svg" className={cn(s.logo)}/>
            </div>
        </>
    )
}