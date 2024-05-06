import s from "./Stats.module.scss"
import cn from "clsx"
import { Inter } from "next/font/google";
import { BottomDiv, TopDiv } from "../Divider";

const inter = Inter({ subsets: ["latin"] });

export default function Stats() {
    return (
        <div className={cn(s.container1)}>
            <TopDiv/>
            <div className={cn(s.container)}>
                <div className={cn(s.titleContainer)}>
                    <span className={cn(s.titleText)}>Did</span>
                    <span className={cn(s.titleText)}>You</span>
                    <span className={cn(s.titleText)}>Know</span>
                </div>
                <div className={cn(s.statsContainer)}>
                    <div className={cn(s.stat)}>
                        <img className={cn(s.statImage)} src="./images/right-arrow.png"/>
                        37% of students feel completely dissatisfied with their education
                    </div>
                    <div className={cn(s.stat)}>
                        <img className={cn(s.statImage)} src="./images/right-arrow.png"/>
                        1 in 3 students failed their Mathematics GCSE in 2023
                    </div>
                    <div className={cn(s.stat)}>
                        <img className={cn(s.statImage)} src="./images/right-arrow.png"/>
                        As a result of the pandemic, 49% of students are academically behind
                    </div>
                </div>
            </div>
            <BottomDiv/>
        </div>
    )
        
}