import cn from "clsx"
import s from "./CustNavbar.module.scss"
import { Barlow, Inter } from "next/font/google"
import CustButton from "@/components/CustButton";

const barlow = Barlow({subsets: ["latin"], weight: "400"});
const inter = Inter({ subsets: ["latin"] });

export default function CustNavbar() {
    return (
        <div className={cn(s.container)}>
            <div className={cn(s.logo)}>
                <img src="/logo.svg"/>
            </div>
            <div className={cn(s.links, inter.className)}>
                <a href="/about" className={cn(s.text)}>
                    About Us 
                </a>
                <a className={cn(s.text)}>
                    Our Products
                </a>
                <a className={cn(s.text)}>
                    Blog
                </a>
                <a className={cn(s.text)}>
                    Reviews
                </a>
            </div>
            <div>
                <CustButton className={cn(s.button)}>
                    Buy Now
                </CustButton>
            </div>
        </div>
    )
}