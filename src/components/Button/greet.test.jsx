import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Greet from "./Greet";


test('Render greet', () => { 
    render(<Greet />)
    const btn = screen.getByText('Greet')
    expect(btn).toBeInTheDocument()
})