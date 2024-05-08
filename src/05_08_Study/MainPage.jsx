import {useState} from "react";
import WarningBanner from "./WarningBanner";

export default function MainPage(props) {
    const [showWarning, setShowWarning] = useState(false)

    const handletoggleClick = () => {
        setShowWarning(prevShowWarning => !prevShowWarning)
    }

    return (
        <>
            <WarningBanner warning = {showWarning} />
            <button onClick = {handletoggleClick}>
                {showWarning ? '감추기' : '보이기'}
            </button>
        </>
    )
}