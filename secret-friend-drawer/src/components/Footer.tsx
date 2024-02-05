import { useNavigate } from "react-router-dom"
import { useParticipantsList } from "../state/hook/useParticipantsList"

import './Footer.css'

const Footer = () => {
    const participants = useParticipantsList()

    const navigateTo = useNavigate()
    
    const start = () => {
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