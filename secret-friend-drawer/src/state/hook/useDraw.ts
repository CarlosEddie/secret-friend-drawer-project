import { useParticipantsList } from "./useParticipantsList";
import { useSetRecoilState } from "recoil";
import { secretFriendResult } from "../atom";
import { holdADraw } from "../helpers/holdADraw";

export const useDraw = () => {

    const participants = useParticipantsList()

    const setResult = useSetRecoilState(secretFriendResult)

    return () => {
        const result = holdADraw(participants)
        setResult(result)
    }
}