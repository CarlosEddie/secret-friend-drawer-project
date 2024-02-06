import shuffle from "just-shuffle";
import { useParticipantsList } from "./useParticipantsList";
import { useSetRecoilState } from "recoil";
import { secretFriendResult } from "../atom";

export const useDraw = () => {

    const participants = useParticipantsList()

    const setResult = useSetRecoilState(secretFriendResult)

    return () => {
        const participantsTotal = useParticipantsList.length

        const shuffled = shuffle(participants)

        const result = new Map<string, string>()

        for(let index = 0; index < participantsTotal; index++) {
            const friendIndex = index === (participantsTotal - 1) ? 0 : index + 1;
            result.set(shuffled[index], shuffled[friendIndex])
        }

        setResult(result)
    }
}