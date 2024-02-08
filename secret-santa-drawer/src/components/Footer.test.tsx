import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Footer from "./Footer"
import { useParticipantsList } from "../state/hook/useParticipantsList"

jest.mock('../state/hook/useParticipantsList', () => {
    return {
        useParticipantsList: jest.fn()
    }
})

const mockNavigation = jest.fn()
const mockDraw = jest.fn()

jest.mock('../state/hook/useDraw', () => {
    return {
        useDraw: () => mockDraw
    }
})

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigation
    }
})

describe('when there are not enough participants', () => {
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue([])
    })

    test('the game can not be started', () => {
        render(<RecoilRoot> <Footer /> </RecoilRoot>)

        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
    })
})

describe('when there are enough participants', () => {
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue(['Carlos', 'Eduardo', 'Eddie'])
    })

    test('the game can be started', () => {
        render(<RecoilRoot> <Footer /> </RecoilRoot>)

        const button = screen.getByRole('button')
        expect(button).not.toBeDisabled()
    })

    test('the game has been started', () => {
        render(<RecoilRoot> <Footer /> </RecoilRoot>)

        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(mockNavigation).toHaveBeenCalledTimes(1)
        expect(mockNavigation).toHaveBeenCalledWith('/draw')
        expect(mockDraw).toHaveBeenCalledTimes(1)
    })
})