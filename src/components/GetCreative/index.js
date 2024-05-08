import s from "./GetCreative.module.scss"
import cn from "clsx"

export default function GetCreative() {
    return (
        <div className={cn(s.container)}>
            <p className={cn(s.titleText)}>Coming Soon...</p>
        </div>
    )
}