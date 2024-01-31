import { render, screen } from "@testing-library/react"
import Form from "./Form"


test('when the input is empty, new participants cannot be added', () => {
    
    render(<Form />)

    const input = screen.getByPlaceholderText('enter the names of the participants')

    const button = screen.getByRole('button')

    expect(input).toBeInTheDocument()
    
    expect(button).toBeDisabled()
})