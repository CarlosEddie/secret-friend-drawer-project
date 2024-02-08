import { fireEvent, render, screen } from "@testing-library/react"
import { useParticipantsList } from "../state/hook/useParticipantsList"
import { RecoilRoot } from "recoil"
import Draw from "./Draw"
import { useDrawResult } from "../state/hook/useDrawResult"

jest.mock('../state/hook/useParticipantsList', () => {
    return {
        useParticipantsList: jest.fn()
    }
})

jest.mock('../state/hook/useDrawResult', () => {
    return {
        useDrawResult: jest.fn()
    }
})

describe('in the draw page', () => {
    const participants = ['Carlos', 'Eduardo', 'Eddie']

    const result = new Map([
        ['Carlos', 'Eddie'],
        ['Eddie', 'Eduardo'],
        ['Eduardo', 'Carlos']
    ])

    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue(participants);
        (useDrawResult as jest.Mock).mockReturnValue(result);
    })

    test('All participants can show off their secret santa', () => {
        render(<RecoilRoot> <Draw /> </RecoilRoot>)

        const options = screen.queryAllByRole('option')
        expect(options).toHaveLength(participants.length + 1)
    })

    test('The secret santa is displayed when requested', () => {
        render(<RecoilRoot>
            <Draw />
        </RecoilRoot>)

        const select = screen.getByPlaceholderText('Select your name')
        
        fireEvent.change(select, {
            target: {
                value: participants[0]
            }
        })

        const button = screen.getByRole('button')

        fireEvent.click(button)

        const secretSanta = screen.getByRole('alert')

        expect(secretSanta).toBeInTheDocument()

    })
})