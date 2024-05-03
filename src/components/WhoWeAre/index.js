import s from "./WhoWeAre.module.scss"
import cn from "clsx"

export default function WhoWeAre() {
    return (
        <div className={cn(s.container)}>
            <div className={cn(s.title)}>
                <div>
                    <div/>
                    <span className={cn(s.titleText)}>Our</span>
                </div>
                <div>
                    <div className={cn(s.gap)}/>
                    <span className={cn(s.titleText)}>Story</span>
                </div>
            </div>

        </div>
    )
}
/*
<h2>The Team:</h2>
<h2>Our Mission:</h2>
<h2>Our Values:</h2>
<h2>Our Journey:</h2>
*/