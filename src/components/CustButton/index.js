import React from "react"
import cn from "clsx"
import s from "./custbutton.module.scss"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], weight: "300" });

export default function CustButton({onClick, children, className}) {
    return (
            <button type="button" className={cn(className, s.button, inter.className)} onClick={onClick}>
                {children}
            </button>
    )
}