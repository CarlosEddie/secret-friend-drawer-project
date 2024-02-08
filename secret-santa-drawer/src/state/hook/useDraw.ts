import { useParticipantsList } from "./useParticipantsList";
import { useSetRecoilState } from "recoil";
import { secretSantaResult } from "../atom";
import { holdADraw } from "../helpers/holdADraw";

export const useDraw = () => {

    const participants = useParticipantsList()

    const setResult = useSetRecoilState(secretSantaResult)

    return () => {
        const result = holdADraw(participants)
        setResult(result)
    }
}