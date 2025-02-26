import {render, screen} from "@testing-library/react"
import Saudacao from "../components/Saudacao"
import '@testing-library/jest-dom'

test("Component render", () =>{
  render(<Saudacao nome="Leandro" />);
  expect(screen.getByText("Olá, Leandro")).toBeInTheDocument(); 
})