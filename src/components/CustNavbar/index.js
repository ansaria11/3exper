import cn from "clsx"
import s from "./CustNavbar.module.scss"
import { Barlow, Inter } from "next/font/google"
import CustButton from "@/components/CustButton";
import Link from "next/link";
import DropdownMenu from "../DropdownMenu";

const barlow = Barlow({subsets: ["latin"], weight: "400"});
const inter = Inter({ subsets: ["latin"] });

export default function CustNavbar() {
    return (
        <div className={cn(s.container)}>
            <div className={cn(s.logo)}>
                <Link href="/">
                    <img className={cn(s.imageLink)} src="./images/logo.svg"/>
                </Link>
                
            </div>
            <div className={cn(s.links, )}>
                <Link href="/about" className={cn(s.text)}>
                    About Us 
                </Link>
                <Link href="/products" className={cn(s.text)}>
                    Our Products
                </Link>
                <a className={cn(s.text)}>
                    Blog
                </a>
                <DropdownMenu className={cn(s.text)} text="Ace-Off!">
                    <Link className={cn(s.dropdownItem)} href="/howtoplay">
                        How To Play
                    </Link>
                    <Link className={cn(s.dropdownItem)} href="/videosolutions">
                        Video Solutions
                    </Link>
                    <Link className={cn(s.dropdownItem)} href="/getcreative">
                        Get Creative
                    </Link>
                </DropdownMenu>
            </div>
            <div className={cn(s.buttonContainer)}>
                <CustButton className={cn(s.buy)} href="https://www.ye-tradingstation.org.uk/product/ace-card-game?v=2810">
                    Buy Now
                </CustButton>
            </div>
        </div>
        
    )
}