import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Greet from "./Greet";


test('Test Greet component',()=>{
    render(<Greet />)

    const greetEle = screen.getByTestId('greet')

    expect(greetEle).toBeInTheDocument()
})