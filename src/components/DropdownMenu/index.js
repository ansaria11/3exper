import s from "./DropdownMenu.module.scss"
import cn from "clsx"

export default function DropdownMenu({className, text, children}) {
    return (
        <div className={cn(className, s.container)}>
            <div className={cn(s.textContainer)}>
                {text}
                <img className={cn(s.image)} src="./images/down-arrow.png"/>
            </div>
            
            <div className={cn(s.menuItems)}>
                {children}
            </div>
        </div>
    )
}