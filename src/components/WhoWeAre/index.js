import s from "./WhoWeAre.module.scss"
import cn from "clsx"

export default function WhoWeAre() {
    return (
        <div className={cn(s.container)}>
            <div className={cn(s.titleContainer)}>
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
                <div className={cn(s.imageContainer)}>
                    <img className={cn(s.titleImage, s.ti1)} src="./images/ourstory/spitalfieldsstall.jpg"/>
                    <img className={cn(s.titleImage, s.ti2)} src="./images/ourstory/groupphoto.jpg"/>
                    <img className={cn(s.titleImage, s.ti3)} src="./images/ourstory/richmondstand.jpg"/>
                </div>
            </div>
            <div className={cn(s.mainContent)}>
                <div className={cn(s.leftImage)}>
                    <img className={cn(s.mainImage)} src="./images/ourstory/fundraisingstand.jpg"/>
                    <img className={cn(s.mainImage)} src="./images/ourstory/edenwalkstall.jpg"/>
                    <img className={cn(s.mainImage)} src="./images/ourstory/jacobaward1.jpg"/>
                </div>
                <div className={cn(s.textColumn)}>
                    <h1 className={cn(s.sectionTitle)}>The Mission</h1>
                    <p className={cn(s.sectionText)}>
                        We aim to inspire a lifelong love for math and equip students with the critical skills necessary for success. We know that studying can be boring,
                        so we&apos;re here to help out.
                    </p>
                    <h1 className={cn(s.sectionTitle)}>The Plan</h1>
                    <p className={cn(s.sectionText)}>
                        We&apos;ve created an accessible card game that you can play anywhere, anytime, any way you want. We want to take the boring bits out of education, and allow
                        people to enjoy the exciting and most interesting bits of maths, with no barrier to entry. We are currently in the process of rolling Ace-Off! out across the country.
                    </p>
                    <h1 className={cn(s.sectionTitle)}>Our Values</h1>
                    <p className={cn(s.sectionText)}>
                    Inclusivity: We want to make our product accessible to everyone, to ensure Ace-Off!  has a meaningful impact.
                    Empowerment: We want to empower students with the necessary skills for success.
                    Sustainability: We care about the future of our planet and want to ensure Ace-Off! contributes positively to  the environment.
                    </p>
                    <div className={cn(s.teamContainer)}>
                        
                    </div>
                </div>
                <div className={cn(s.rightImage)}>
                    <img className={cn(s.mainImage)} src="./images/ourstory/groupphoto.jpg"/>
                    <img className={cn(s.mainImage)} src="./images/ourstory/classroomtrials.jpg"/>
                    <img className={cn(s.mainImage)} src="./images/ourstory/aceoffboxes.jpg"/>
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