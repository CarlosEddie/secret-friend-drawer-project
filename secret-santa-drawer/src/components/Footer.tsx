import { useNavigate } from "react-router-dom"
import { useParticipantsList } from "../state/hook/useParticipantsList"

import './Footer.css'
import { useDraw } from "../state/hook/useDraw"

const Footer = () => {
    const participants = useParticipantsList()

    const navigateTo = useNavigate()

    const draw = useDraw()
    
    const start = () => {
        draw()
        navigateTo('/draw')
    }

    return (
        <footer className="footer-settings">
            <button className="button" disabled={participants.length < 3} onClick={start}>
                Start Game
            </button>
            <img src="/images/bags.png" alt="Shopping bags" />
        </footer>
    )
}

export default Footer