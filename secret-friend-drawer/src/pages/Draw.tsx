import { useState } from "react"
import { useParticipantsList } from "../state/hook/useParticipantsList"
import { useDrawResult } from "../state/hook/useDrawResult"
import Card from '../components/card'

import './Draw.css'

const Draw = () => {
    const participants = useParticipantsList()

    const [participantOfTheTime, setParticipantOfTheTime] = useState('')
    const [secretFriend, setSecretFriend] = useState('')

    const result = useDrawResult()

    const draw = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (result.has(participantOfTheTime)) {
            setSecretFriend(result.get(participantOfTheTime)!)
        }
    }

    return (
        <Card>
            <section className="draw">
                <h2>Who will take the paper?</h2>
                <form onSubmit={draw}>
                    <select name="participantOfTheTime" id="participantOfTheTime" placeholder="Select your name" value={participantOfTheTime} onChange={event => setParticipantOfTheTime(event.target.value)}>
                        {participants.map(participant => <option key={participant} >{participant}</option>)}
                    </select>
                    <button className="button-draw">Draw</button>
                </form>
                {secretFriend && <p className="result" role="alert">{secretFriend}</p>}
                <footer className="draw">
                    <img src="/images/plane.png" className="plane" alt="A drawing of a paper airplane" />
                </footer>
            </section>
            
        </Card>
        
    )
}

export default Draw