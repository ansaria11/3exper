import cn from "clsx"
import s from "./AuditedBlog.module.scss"

export default function AuditedBlog() {
    return (
        <div className={cn(s.container)}>
            <iframe className={s.videoEmbed} src={"https://www.youtube.com/embed/cCicj3wCrS8"}/>
        </div>
    )
}
