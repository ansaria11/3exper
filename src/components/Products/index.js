import s from "./Products.module.scss"
import cn from "clsx"

export default function Products() {
    return (
        <div className={cn(s.container)}>
            <div className={cn(s.title)}>
                <div>
                    <div/>
                    <span className={cn(s.titleText, s.titleTop)}>Our</span>
                </div>
                <div>
                    <div className={cn(s.gap)}/>
                    <span className={cn(s.titleText, s.titleBottom)}>Products</span>
                </div>
            </div>
            <div className={cn(s.mainCard)}>
                <div className={cn(s.product, s.p1)}>
                    <img className={cn(s.image)} src="./images/sidewaysangledotheraceoff.png"/>
                    <p className={cn(s.productText)}>Ace-Off!</p>
                </div>
                <div className={cn(s.product, s.p2)}>
                    <img className={cn(s.image)}/>
                    <p className={cn(s.productText)}>Ace-Off! Juniors</p>
                </div>
                <div className={cn(s.product, s.p3)}>
                    <img className={cn(s.image)}/>
                    <p className={cn(s.productText)}>???</p>
                </div>
                <div className={cn(s.product, s.p4)}>
                    <img className={cn(s.image)}/>
                    <p className={cn(s.productText)}>???</p>
                </div>
            </div>
        </div>
    )
}