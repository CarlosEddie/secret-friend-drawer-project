import { render, screen } from "@testing-library/react"
import { useParticipantsList } from "../state/hook/useParticipantsList"
import { RecoilRoot } from "recoil"
import Draw from "./Draw"

jest.mock('../state/hook/useParticipantsList', () => {
    return {
        useParticipantsList: jest.fn()
    }
})

describe('in the draw page', () => {
    const participants = ['Carlos', 'Eduardo', 'Eddie']

    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue(participants)
    })

    test('All participants can show off their secret friend', () => {
        render(<RecoilRoot> <Draw /> </RecoilRoot>)

        const options = screen.queryAllByRole('option')
        expect(options).toHaveLength(participants.length)
    })
})