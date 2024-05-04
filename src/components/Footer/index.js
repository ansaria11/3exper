import Link from "next/link"
import s from "./Footer.module.scss"
import cn from "clsx"
import CustButton from "../CustButton"


export default function Footer() {
    return (
        <div className={cn(s.container)}>
            <div className={cn(s.emailForm)}>
                <div>
                    <p className={cn(s.title)}>Contact Us:</p>
                </div>
                <div className={cn(s.emailFormInputs)}>
                    <div className={cn(s.emailFormParams)}>
                        <div className={cn(s.input)}>
                            <p className={cn(s.inputText)}>Name:</p>
                            <input className={cn(s.inputBox)} type="text" placeholder="" name="Name"/>
                        </div>
                        <div className={cn(s.input)}>
                            <p className={cn(s.inputText)}>Phone Number:</p>
                            <input className={cn(s.inputBox)} type="text" placeholder="" name="Phone"/>
                        </div>
                        <div className={cn(s.input)}>
                            <p className={cn(s.inputText)}>Email:</p>
                            <input className={cn(s.inputBox)} type="text" placeholder="" name="Email"/>
                        </div>
                    </div>
                    <div className={cn(s.mainInput)}>
                        <div>
                            <p className={cn(s.inputText)}>Message:</p>
                            <textarea className={cn(s.mainInputBox)} rows={5} type="text" placeholder="Message" name="Message"/>
                        </div>
                            <CustButton className={cn(s.submitButton)}>
                            Submit
                            </CustButton>
                        
                    </div>
                </div>
            </div>
            <div className={cn(s.socials)}>
                <div className={cn(s.titleContainer)}>
                    <p className={cn(s.title)}>Socials:</p>
                </div>
                <a href="https://www.instagram.com/radians_ye/" className={cn(s.socialLink)}>
                    <img className={cn(s.socialIcon)} src="./images/instagram.png"/>
                    <p className={cn(s.socialText)}>Instagram</p>
                </a>
                <a href="https://www.facebook.com/people/Radians-YE/pfbid0j4LgXBcLLXCxrBkMfethAQjgt7ncqaDF2SBEqAmR9Cuh2A5pHnjgTuZpqKpY2J6Tl/" className={cn(s.socialLink)}>
                    <img className={cn(s.socialIcon)} src="./images/facebook.png"/>
                    <p className={cn(s.socialText)}>Facebook</p>
                </a>
                <a className={cn(s.socialLink)}>
                    <img className={cn(s.socialIcon)} src="./images/youtube.png"/>
                    <p className={cn(s.socialText)}>Youtube</p>
                </a>
            </div>
            <div className={cn(s.links)}>
                <div className={cn(s.socials)}>
                <div className={cn(s.titleContainer)}>
                    <p className={cn(s.title)}>Discover:</p>
                </div>
                <Link href="" className={cn(s.pageLink)}>
                    Our Story
                </Link>
                <Link href="" className={cn(s.pageLink)}>
                    Our Products
                </Link>
                <Link href="" className={cn(s.pageLink)}>
                    Ace-Off!
                </Link>
            </div>
            </div>
            
        </div>
    )
}