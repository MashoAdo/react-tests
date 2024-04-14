import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Greet from "./Greet";

// Greet should render the text hello and if a name is passed into the component
// it should render hello followed by the name


test('Greet with hello only',()=>{
    render(<Greet />)

    const greetEle = screen.getByTestId('greet')

    expect(greetEle).toBeInTheDocument()
})


test('Greet with name',()=>{
    render(<Greet name='Naipa' />)

    const textEle = screen.getByText('Hello Naipa')

    expect(textEle).toBeInTheDocument()
})

//TDD
// write test ,followed by implementation and then refactoring