import React from "react";
import { render } from "@testing-library/react";
import Search from "../app/components/Search";
import * as NextNavigation from "next/navigation";
import userEvent from "@testing-library/user-event";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe("Search Component", () => {
  it("updates search parameters correctly", async () => {
    const mockReplace = jest.fn();
    (NextNavigation.useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams()
    );
    (NextNavigation.useRouter as jest.Mock).mockReturnValue({
      replace: mockReplace,
    });
    (NextNavigation.usePathname as jest.Mock).mockReturnValue("/pokemons");

    const { getByPlaceholderText } = render(<Search />);

    const searchInput = getByPlaceholderText("Search pokemons");
    await userEvent.type(searchInput, "pikachu");

    expect(mockReplace).toHaveBeenCalledTimes(1);

    expect(mockReplace).toHaveBeenCalledWith("/pokemons?query=pikachu");
  });
});
