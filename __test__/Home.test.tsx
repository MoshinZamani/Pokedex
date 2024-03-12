import Home from "@/app/page";
import { render } from "@testing-library/react";

describe("Home Page - Rendering", () => {
  it("contains link to Pokémon API with correct attributes", () => {
    const { getByText } = render(<Home />);
    const apiLink = getByText("https://pokeapi.co/");
    expect(apiLink).toBeInTheDocument();
    expect(apiLink).toHaveAttribute("href", "https://pokeapi.co/");
    expect(apiLink).toHaveAttribute("target", "_blank");
  });

  it("contains local link to pokemons with correct classes", () => {
    const { getByText } = render(<Home />);
    const localLink = getByText(".../pokemons");
    expect(localLink).toBeInTheDocument();
    expect(localLink).toHaveAttribute("href", "http://localhost:3000/pokemons");
  });
});
