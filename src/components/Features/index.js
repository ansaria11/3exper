import s from "./Features.module.scss"
import cn from "clsx"

export default function Features() {
    return (
        <div className={cn(s.container)}>
            <div className={cn(s.c1, s.card)}>
                <img className={cn(s.icon)} src="./images/difficultyspread.png"/>
                <h2 className={cn(s.titleText)}>Packed Full of Content</h2>
                <div className={cn(s.mainCardText)}>
                    <p className={cn(s.secondaryCardText)}>
                        Ace-Off! contains 56 unique questions, each one specifically designed to involve real-world aspects while showing off how useful maths can truly be.
                        The cards span a range of difficulties, from green to red, meaning that no matter your mathematic skill, there will always be a card for you.
                    </p>
                </div>
            </div>
            <div className={cn(s.c2, s.bgBlue, s.card)}>
                <img className={cn(s.icon)} src="./images/dice.png"/>
                <h2 className={cn(s.titleText)}>Innovative Gameplay</h2>
                <div className={cn(s.mainCardText)}>
                    <p className={cn(s.secondaryCardText)}>
                        We've added a groundbreaking gameplay mechanic to Ace-Off! to make sure there's never a dull moment while playing. Before a card is drawn,
                        a dice is rolled to decided the numbers in the question. This keeps everyone on their toes, as answers can't be memorised!
                    </p>
                </div>
            </div>
            <div className={cn(s.c3, s.bgBlue, s.card)}>
                <img className={cn(s.icon)} src="./images/joystick.png"/>
                <h2 className={cn(s.titleText)}>Brimming with References</h2>
                <div className={cn(s.mainCardText)}>
                    <p className={cn(s.secondaryCardText)}>
                        We made sure that every single question contains references to the real world, as we want students to be able to see the applications of maths
                        in reality. We also made sure to add pop-culture and gaming references so that the questions resonate well with students.
                    </p>
                </div>
            </div>
            <div className={cn(s.c4, s.card)}>
                <img className={cn(s.icon)} src="./images/flexibility.png"/>
                <h2 className={cn(s.titleText)}>Flexible</h2>
                <div className={cn(s.mainCardText)}>
                    <p className={cn(s.secondaryCardText)}>
                        Ace-Off! is designed to be played anywhere, at any time, for however long you want. The time of each game is decided simply by however many questions
                        you want to go until, so you can stop at any time. We wanted to ensure that you could have fun studying no matter the situation.
                    </p>
                </div>
            </div>
        </div>
    )
}