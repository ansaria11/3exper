import s from "./Stats.module.scss"
import cn from "clsx"
import { Inter } from "next/font/google";
import { BottomDiv, TopDiv } from "../Divider";

const inter = Inter({ subsets: ["latin"] });

export default function Stats() {
    return (
        <div className={cn(s.containerCol)}>
            <TopDiv/>
            <div className={cn(s.container, )}>
                <div className={cn(s.statRow)}>
                    <p><span className={cn(s.highlightedText)}>37%</span> of students felt completely dissatisfied with their education</p>
                </div>
                <div className={cn(s.statRow)}>
                    <p><span className={cn(s.highlightedText)}>1 in 3</span> students failed their Mathematics GCSE in 2023</p>
                </div>
                <div className={cn(s.statRow)}>
                    <p><span className={cn(s.highlightedText)}>49%</span> of students are academically behind as a result of the pandemic</p>
                </div>
            </div>
            <BottomDiv/>
        </div>
        
    )
        
}