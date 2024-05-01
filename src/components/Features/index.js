import s from "./Features.module.scss"
import cn from "clsx"

export default function Features() {
    return (
        <div className={cn(s.container)}>
            <div className={cn(s.c1, s.card)}>
                <img className={cn(s.icon)} />
                <h2 className={cn(s.titleText)}>Packed full of content</h2>
                <div className={cn(s.mainCardText)}>
                    <p>bla bla bla bla</p>
                </div>
            </div>
            <div className={cn(s.c2, s.bgBlue, s.card)}>
                <img className={cn(s.icon)} src="./images/dice.png"/>
                <h2 className={cn(s.titleText)}>Innovative Gameplay</h2>
                <div className={cn(s.mainCardText)}>
                    <p>bla bla bla bla</p>
                </div>
            </div>
            <div className={cn(s.c3, s.bgBlue, s.card)}>
                <img className={cn(s.icon)} src="./images/joystick.png"/>
                <h2 className={cn(s.titleText)}>Brimming with References</h2>
                <div className={cn(s.mainCardText)}>
                    <p>bla bla bla bla</p>
                </div>
            </div>
            <div className={cn(s.c4, s.card)}>
                <img className={cn(s.icon)} src="./images/flexibility.png"/>
                <h2 className={cn(s.titleText)}>Flexible</h2>
                <div className={cn(s.mainCardText)}>
                    <p>bla bla bla bla</p>
                </div>
            </div>
        </div>
    )
}