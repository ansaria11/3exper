import React from "react"
import cn from "clsx"
import s from "./custbutton.module.scss"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], weight: "300" });

export default function CustButton({href, children, className, onClick}) {
    return (
            <a className={cn(className, s.button, )} href={href} onClick={onClick}>
                {children}
            </a>
    )
}