import { useParticipantsList } from "../state/hook/useParticipantsList"

const ParticipantList = () => {
    const participants: string[] = useParticipantsList()
    return (
        <ul>
            {participants.map(participant => <li key={participant}>{participant}</li>)}
        </ul>
    )
}

export default ParticipantList