import { Inter } from "next/font/google";
import s from "./why.module.scss"
import cn from "clsx"

const inter = Inter({subsets: ["latin"]})

export default function Why() {
    return (
        <div className={cn(s.container)}>
            <h1 className={cn(s.h1, )}>Seriously... A Card Game?</h1>
            <div className={cn(s.cardContainer, )}>
                <div className={cn(s.card)}>
                    <img src="./images/competition.png" className={cn(s.image)}/>
                    <h3 className={cn(s.cardTitle)}>Inspiring Competition</h3>
                    <p className={cn(s.cardText)}>
                        We specifically crafted &quot;Ace-Off!&quot; to be fast-paced and highly competitive, nurturing key life skills from an early stage.
                    </p>
                </div>
                <div className={cn(s.card)}>
                    <img src="./images/no-phone.png" className={cn(s.image)}/>
                    <h3 className={cn(s.cardTitle)}>No more screens</h3>
                    <p className={cn(s.cardText)}>
                        In the current screen apocalypse, we believe that learning is best done face-to-face. Children are becoming increasingly antisocial, so &quot;Ace-Off!&quot; encourages constuctive socialisation.
                    </p>
                </div>
                <div className={cn(s.card)}>
                    <img src="./images/laugh.png" className={cn(s.image)}/>
                    <h3 className={cn(s.cardTitle)}>Fun!</h3>
                    <p className={cn(s.cardText)}>
                        We understand that studying can feel like a slog sometimes, so we designed &quot;Ace-Off!&quot; to be genuinely fun. We guarantee that its riveting gameplay will leave you itching to come back.
                    </p>
                </div>
            </div>
        </div>
    )
}