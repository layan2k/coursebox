import React from "react"
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from "./Button"

describe("Button test cases ", () => {
    it('Render check', () => {
        const onclick = jest.fn();
        const { asFragment } = render(<Button onClick={onclick}>Button</Button>);
        expect(asFragment()).toMatchSnapshot();
    })
    it("Check onClick callback", () => {
        const onclick = jest.fn();
        render(<Button onClick={onclick}>Button</Button>);
        const element = screen.getByRole("button");
        console.log("Button element:", element);
        fireEvent.click(element);
        expect(onclick).toHaveBeenCalled()
    })
})