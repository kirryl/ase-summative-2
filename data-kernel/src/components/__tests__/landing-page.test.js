import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingPage from "../landing-page";
import { MemoryRouter } from "react-router-dom";
import { expect } from "@jest/globals";

// mock useNavigate function
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("When landing page loads", () => {
  it("renders title", () => {
    render(<LandingPage />, { wrapper: MemoryRouter });

    const title = screen.getByText("Data Kernel_");
    expect(title).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<LandingPage />, { wrapper: MemoryRouter });

    const description = screen.getByText("Welcome to the Data Kernel App");
    expect(description).toBeInTheDocument();
  });

  it("router navigates to country-export on tile click", () => {
    // mock navigate
    const mockRouter = jest.fn();
    require("react-router-dom").useNavigate.mockImplementation(
      () => mockRouter
    );

    render(<LandingPage />, { wrapper: MemoryRouter });

    // get tile with countries link
    const countriesTile = screen.getByRole("button", { name: "Countries" });
    fireEvent.click(countriesTile);

    expect(mockRouter).toHaveBeenCalledWith("/country-export");
  });
});
