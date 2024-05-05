import {ReactLenis, useLenis} from "@studio-freight/react-lenis"
import React from "react"
import s from "./layout.module.scss"
import cn from "clsx"
import CustNavbar from "@/components/CustNavbar"
import { Inter, Barlow } from "next/font/google"
import Footer from "@/components/Footer"
 
const inter = Inter({ subsets: ["latin"] });
const barlow = Barlow({subsets: ["latin"], weight: "500"})

export default function Layout({children}) {
    const lenis = useLenis(({scroll}) => {
        //scrollcallback
    })

    return (
        <>
            <ReactLenis root>
                <main>
                    <div className={cn(s.layout, inter.className)}>
                        <CustNavbar/>
                        {children}
                        <Footer/>
                    </div>
                </main>
            </ReactLenis>
        </>
    )
}