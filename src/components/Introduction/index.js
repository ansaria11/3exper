import Image from "next/image"
import s from "./Introduction.module.scss"
import cn from "clsx"

export default function Introduction() {
    return (
        <div className={cn(s.container)}>
            <img className={cn(s.image)} src="/sidewaysangledotheraceoff.png"/>
            <div className={cn(s.mainPara)}>
                <h1 className={cn(s.titleText)}>Introducing <span>Ace-Off!</span></h1>
                <p className={cn(s.paraText)}>
                    Seeing these stats, we knew we had to make a change. As students ourselves, we knew that studying could feel like a bit of a slog, 
                    so we searched for an engaging solution to make students want to study. After hours of painstaking research, we figured it out:
                    A card game would be perfect!
                </p>
            </div>
            
        </div>
    )
}