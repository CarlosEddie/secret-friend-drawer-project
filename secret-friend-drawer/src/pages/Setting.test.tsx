import { RecoilRoot } from "recoil"
import Setting from "./Setting"
import { render } from "@testing-library/react"

const mockNavigation = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigation
    }
})

describe('the settings page', () => {
    test('must be rendered correctly', () => {
        const {container} = render(<RecoilRoot> <Setting /> </RecoilRoot>)

        expect(container).toMatchSnapshot()
    })
})