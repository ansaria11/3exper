import s from "./WhoWeAre.module.scss"
import cn from "clsx"

export default function WhoWeAre() {
    return (
        <div className={cn(s.container)}>
            <h1>Our Story:</h1>
            <h2>The Team:</h2>
            <h2>Our Mission:</h2>
            <h2>Our Values:</h2>
            <h2>Our Journey:</h2>
        </div>
    )
}