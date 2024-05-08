import { useRef, useState } from "react"
import TypeScrollDropdown from "../TypeScrollDropdown"
import s from "./VideoSolutions.module.scss"
import cn from "clsx"

export default function VideoSolutions() {

    const [curQuestion, setQuestion] = useState("https://www.youtube.com/embed/nmpfA9fK5wM")
    const inputRef = useRef()


    const videos = {
        1: "nmpfA9fK5wM",
        2: "XpbbRVV9dTg",
        3: "xb_1qZarxWo",
        4: "4KhY-DwmuFc",
        5: "XtNNwYH-qKA",
        6: "_35KrpYTzPk",
        7: "98-HhbB5Tgo",
        8: "nb5TofiexL4",
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
        29: "IlGB-XLjOcE",
        30: "CEh4Wz9yWV4",
        31: "",
        32: "vXDQ3gISxKk",
        33: "",
        34: "",
        35: "",
        36: "0nG95KxhQe8",
        37: "d7YYj5BJH0k",
        38: "_Iu2sYba9ys",
        39: "",
        40: "",
        41: "8P1ZedLQcME",
        42: "68LqaC8sNFI",
        43: "LXKPNUP5UM4",
        44: "Bb8qAtUdiOY",
        45: "WZOwNU1oJh4",
        46: "",
        47: "VeMoy7CZiaI",
        48: "Ui7_PkhA2Wc",
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
                    <p className={s.selectText}>Question(1-56)</p>
                    <div>
                        <input ref={inputRef} type="number" min="1" max="56" className={cn(s.input)} defaultValue={1} onChange={() => videoSelector()}/>
                    </div>
                </div>
                <div className={s.videoEmbedContainer}>
                    <iframe className={s.videoEmbed} src={curQuestion}/>
                </div>
            </div>
        </div>
    )
}