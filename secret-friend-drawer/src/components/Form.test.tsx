import { act, fireEvent, render, screen } from "@testing-library/react"
import Form from "./Form"
import { RecoilRoot } from "recoil"

describe('the Form.tsx behavior', () => {
    test('when the input is empty, new participants cannot be added', () => {

        render(<RecoilRoot> <Form /> </RecoilRoot>)

        const input = screen.getByPlaceholderText('enter the names of the participants')

        const button = screen.getByRole('button')

        expect(input).toBeInTheDocument()

        expect(button).toBeDisabled()
    })

    test('add a participant if a name is filled in', () => {

        render(<RecoilRoot> <Form /> </RecoilRoot>)

        const input = screen.getByPlaceholderText('enter the names of the participants')

        const button = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 'Carlos'
            }
        })

        fireEvent.click(button)

        expect(input).toHaveFocus()

        expect(input).toHaveValue("")
    })

    test('duplicate names cannot be added to the list', () => {

        render(<RecoilRoot> <Form /> </RecoilRoot>)

        const input = screen.getByPlaceholderText('enter the names of the participants')

        const button = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 'Carlos'
            }
        })

        fireEvent.click(button)

        fireEvent.change(input, {
            target: {
                value: 'Carlos'
            }
        })

        fireEvent.click(button)

        const errorMessage = screen.getByRole('alert')
        expect(errorMessage.textContent).toBe('Duplicate names are not allowed!')
    })

    test('the error message should disappear after the timers', () => {

        jest.useFakeTimers()

        render(<RecoilRoot> <Form /> </RecoilRoot>)

        const input = screen.getByPlaceholderText('enter the names of the participants')

        const button = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 'Carlos'
            }
        })

        fireEvent.click(button)

        fireEvent.change(input, {
            target: {
                value: 'Carlos'
            }
        })

        fireEvent.click(button)

        let errorMessage = screen.queryByRole('alert')
        expect(errorMessage).toBeInTheDocument()

        act(() => {
            jest.runAllTimers()
        })

        errorMessage = screen.queryByRole('alert')
        expect(errorMessage).toBeNull()
    })
})

