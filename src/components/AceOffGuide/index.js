import s from "./AceOffGuide.module.scss"
import cn from "clsx"

export default function AceOffGuide() {
    return (
        <div className={cn(s.container)}>
            <h1 className={cn(s.title)}>How To Play</h1>
            <div className={cn(s.instructions)}>
                <div className={cn(s.stepCard)}>
                    <div className={cn(s.textContainer)}>
                        <h2 className={cn(s.instructionTitleText)}>1. Set Up</h2>
                        <p className={cn(s.instructionMainText)}>
                            Set the deck face down on a flat surface. Find a surface big enough to roll the dice.
                            Optionally, you may use pen and paper for any working you may need.
                        </p>
                    </div>
                    <div className={s.imageContainer}>
                        <img/>
                    </div>
                </div>
                <div className={cn(s.stepCard)}>
                    <div className={cn(s.textContainer)}>
                        <h2 className={cn(s.instructionTitleText)}>2. Roll the Dice</h2>
                        <p className={cn(s.instructionMainText)}>
                            The roll will determine the value of the the variable &quot;n&quot;, so be sure
                            to start solving as soon as the dice finished rolling. Speed is the essence of Ace-Off!

                        </p>
                    </div>
                    <div className={s.imageContainer}>
                        <img/>
                    </div>
                </div>
                <div className={cn(s.stepCard)}>
                    <div className={cn(s.textContainer)}>
                        <h2 className={cn(s.instructionTitleText)}>3. Draw a Card</h2>
                        <p className={cn(s.instructionMainText)}>  
                            Draw from the top of the deck, and flip the card to reveal the question. Don&apos;t start solving yet
                            though, as the variable &quot;n&quot; will determing the numbers for the question.
                        </p>
                    </div>
                    <div className={s.imageContainer}>
                        <img/>
                    </div>
                </div>
                <div className={cn(s.stepCard)}>
                    <div className={cn(s.textContainer)}>
                        <h2 className={cn(s.instructionTitleText)}>4. Race To Solve</h2>
                        <p className={cn(s.instructionMainText)}>
                            Once you&apos;ve solved the question, make sure to shout &quot;Ace!&quot; to let everyone
                            know. You only get one chance though, so make sure you&apos;re confident in your answer.
                        </p>
                    </div>
                    <div className={s.imageContainer}>
                        <img/>
                    </div>
                </div>
                <div className={cn(s.stepCard)}>
                    <div className={cn(s.textContainer)}>
                        <h2 className={cn(s.instructionTitleText)}>5. Check Answers</h2>
                        <p className={cn(s.instructionMainText)}>
                            Check the back of the card for the answer to the question. Make sure to use the answer that
                            corresponds to your dice roll. Points are given for correct answers, with more given depending
                            on the order solved.
                        </p>
                    </div>
                    <div className={s.imageContainer}>
                        <img/>
                    </div>
                </div>
                <div className={cn(s.stepCard)}>
                    <div className={cn(s.textContainer)}>
                        <h2 className={cn(s.instructionTitleText)}>6. And Again</h2>
                        <p className={cn(s.instructionMainText)}>
                            Once the points have been dished out, draw the next card and continue playing for however long you want.
                            The winner is the person with the most points at the end.
                        </p>
                    </div>
                    <div className={s.imageContainer}>
                        <img/>
                    </div>
                </div>
            </div>
        </div>
    )
}