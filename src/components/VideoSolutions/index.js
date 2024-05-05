import { useRef, useState } from "react"
import TypeScrollDropdown from "../TypeScrollDropdown"
import s from "./VideoSolutions.module.scss"
import cn from "clsx"

export default function VideoSolutions() {

    const [curQuestion, setQuestion] = useState("")
    const inputRef = useRef()


    const videos = {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "yNNfjvoRwDM",
        10: "qv_VA1AXSjU",
        11: "yLTrkogtjVY",
        12: "j3meh00qIrI",
        13: "",
        14: "W6Nu_aqEKfo",
        15: "liwm_Gyk59I",
        16: "OyknC8Cz2qk",
        17: "vQkUJn3UDic",
        18: "BD5PDnOdO3c",
        19: "SDKyNNqH3zo",
        20: "7V9VRufeukU",
        21: "2VEYn5ovYzg",
        22: "Yy-hueqjNkM",
        23: "oDEdZpugyqs",
        24: "c9BQDBrYlX4",
        25: "dTOiFVInSSE",
        26: "ABVHlFVFCsY",
        27: "3gtbsMtQsto",
        28: "O7F_3mLabg4",
        29: "",
        30: "",
        31: "",
        32: "",
        33: "",
        34: "",
        35: "",
        36: "",
        37: "",
        38: "",
        39: "",
        40: "",
        41: "",
        42: "",
        43: "",
        44: "",
        45: "",
        46: "",
        47: "",
        48: "",
        49: "",
        50: "",
        51: "",
        52: "",
        53: "",
        54: "",
        55: "",
        56: ""
    }

    const videoSelector = () => {
        setQuestion("https://www.youtube.com/embed/" + videos[inputRef.current.value])
    }

    return (
        <div className={cn(s.container)}>
            <p className={cn(s.title)}>Video Solutions</p>
            <div className={cn(s.guideContainer)}>
                <div className={cn(s.videoSelector)}>
                    <p className={s.selectText}>Question </p>
                    <div>
                        <input ref={inputRef} type="number" min="1" max="56" className={cn(s.input)} defaultValue={1} onBlur={() => videoSelector()}/>
                    </div>
                </div>
                <div className={s.videoEmbedContainer}>
                    <iframe className={s.videoEmbed} src={curQuestion}/>
                </div>
            </div>
            
        </div>
    )
}