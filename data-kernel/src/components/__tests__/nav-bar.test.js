import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NavBarDataKernel from "../nav-bar";

describe("When nav bar is visible", () => {
  it("renders app name", () => {
    render(<NavBarDataKernel />);

    const appName = screen.getByText("Data Kernel_");
    expect(appName).toBeInTheDocument();
  });

  it("renders about button", () => {
    render(<NavBarDataKernel />);

    const aboutNavLink = screen.getByText("About");
    expect(aboutNavLink).toBeInTheDocument();
    expect(aboutNavLink.href).toBe(
      "https://github.com/kirryl/ase-summative-2/tree/main#readme"
    );
  });

  it("renders data export dropdown", () => {
    render(<NavBarDataKernel />);

    const dataExportDropdown = screen.getByText("Data Export");
    expect(dataExportDropdown).toBeInTheDocument();
  });

  it("renders countries dropdown item", () => {
    render(<NavBarDataKernel />);

    // click dropdown first
    const dataExportDropdown = screen.getByText("Data Export");
    fireEvent.click(dataExportDropdown);

    // check if nav link is on screen
    const countriesNavLink = screen.getByText("Countries");
    expect(countriesNavLink).toBeInTheDocument();
    expect(countriesNavLink.href).toBe("http://localhost/country-export");
  });
});
