import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DataExport from "../data-export";
import axios from "axios";

test("smoke test", () => {
  expect(true).toBe(true);
});

jest.mock("axios");

global.URL.createObjectURL = jest.fn();

describe("When the country data export is loaded", () => {
  it("should render title", () => {
    render(<DataExport />);
    const dataExportTitle = screen.getByTestId("page-title");
    expect(dataExportTitle).toBeInTheDocument();
    expect(dataExportTitle).toHaveTextContent("Nations Data");
  });

  it("should render export button", () => {
    render(<DataExport />);
    const dataExportButton = screen.getByTestId("page-export-button");
    expect(dataExportButton).toBeInTheDocument();
    expect(dataExportButton).toHaveTextContent("Export JSON");
  });

  it("should render page description", () => {
    render(<DataExport />);
    const dataExportDesc = screen.getByTestId("page-description");
    expect(dataExportDesc).toBeInTheDocument();
    expect(dataExportDesc).toHaveTextContent(
      "This is a portal for exporting country data"
    );
  });

  test("loads countries and triggers download on button click", async () => {
    const responseData = [{ name: "Country A" }, { name: "Country B" }];
    axios.get.mockResolvedValue({ data: responseData });

    render(<DataExport />);

    fireEvent.click(screen.getByTestId("page-export-button"));

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://restcountries.com/v3.1/all"
      );
    });
  });
});
