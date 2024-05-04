import { useRef, useState } from "react"
import s from "./TypeScrollDropdown.module.scss"
import cn from "clsx"

export default function TypeScrollDropdown() {
    const [curQuestion, setQuestion] = useState(1)
    const inputRef = useRef()

    

    const videoUpdater = (e) => {
        setQuestion(e.target.value)
        //youtube played update:

        //

    }

    return (
        <div className={cn(s.container)}>
            <div className={s.shownContainer}>
                <input ref={inputRef} type="number" className={cn(s.input)} onChange={(e) => videoUpdater(e)} value={curQuestion}/>
                <div className={cn(s.separator)}/>
                <img className={cn(s.image)} src="./images/down-arrow.png"/>
            </div>
            <div data-lenis-prevent className={cn(s.scrollContainer)}>
                <div className={cn(s.dropdownContainer)}>
                    <div className={cn(s.dropdownItem)}>
                        1
                    </div>
                    <div className={cn(s.dropdownItem)}>
                        2
                    </div>
                    <div className={cn(s.dropdownItem)}>
                        3
                    </div>
                </div>
            </div>
        </div>
    )
}