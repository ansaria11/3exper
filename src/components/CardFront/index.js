import s from "./CardFront.module.scss"
import cn from "clsx"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function CardFront() {
    return (
        <div className={cn(s.container, inter.className)}>
            <img className={cn(s.image)} src="./images/Q11front4K.png"/>
            <div className={cn(s.pointer, s.p1)}/>
            <p className={cn(s.text, s.t1)}>&quot;Ace-Off!&quot; contains 56 uniquely designed questions</p>
        </div>
    )
}