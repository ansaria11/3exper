import {ReactLenis, useLenis} from "@studio-freight/react-lenis"
import React from "react"
import s from "./layout.module.scss"
import cn from "clsx"
import CustNavbar from "@/components/CustNavbar"
 

export default function Layout({children}) {
    const lenis = useLenis(({scroll}) => {
        //scrollcallback
    })

    return (
        <>
            <ReactLenis root>
                <main>
                    <div className={cn(s.layout)}>
                        <CustNavbar/>
                        {children}
                    </div>
                </main>
            </ReactLenis>
        </>
    )
}