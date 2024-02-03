import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Footer from "./Footer"

describe('where there are not enough participants', () => {
    test("the game can't be started", () => {
        render(<RecoilRoot> <Footer /> </RecoilRoot>)

        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
    })
})