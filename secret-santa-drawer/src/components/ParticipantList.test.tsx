import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import ParticipantList from "./ParticipantList"
import { useParticipantsList } from "../state/hook/useParticipantsList"

jest.mock('../state/hook/useParticipantsList', () => {
    return {
        useParticipantsList: jest.fn()
    }
})

describe('an empty list of participants', () => {
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue([])
    })
    test('must be rendered without elements', () => {
        render(<RecoilRoot> <ParticipantList /> </RecoilRoot>)
        const items = screen.queryAllByRole('listitem')
        expect(items).toHaveLength(0)
    })
})

describe('a filled list of participants', () => {
    const participants = ['Carlos', 'Eduardo']
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue(participants)
    })
    test('must be rendered without elements', () => {
        render(<RecoilRoot> <ParticipantList /> </RecoilRoot>)
        const items = screen.queryAllByRole('listitem')
        expect(items).toHaveLength(participants.length)
    })
})