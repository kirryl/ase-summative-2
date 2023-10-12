import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useState } from "react";

function DataExport() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseURL = "https://restcountries.com/v3.1";

  const loadCountries = async () => {
    setLoading(true);

    try {
      // call api using baseURL
      const response = await axios.get(`${baseURL}/all`);
      setData(response.data);
    } catch (er) {
      // to be expanded on with error handling
      setError(er);
    } finally {
      setLoading(false);
    }
  };

  const downloadFile = ({ data, fileName, fileType }) => {
    // Create a blob
    const blob = new Blob([data], { type: fileType });
    // Create an anchor element and click it
    const anchor = document.createElement("a");
    anchor.download = fileName;
    anchor.href = window.URL.createObjectURL(blob);
    const clickEvent = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    anchor.dispatchEvent(clickEvent);
    anchor.remove();
  };

  const handleButtonClick = async () => {
    // call api
    await loadCountries();
    // download JSON file
    downloadFile({
      data: JSON.stringify(data, null, "\t"),
      fileName: "countries.json",
      fileType: "text/json",
    });
  };

  return (
    <Container fluid>
      <h1 data-testid="page-title" className="text-primary">
        Nations Data
      </h1>
      <div>
        <p data-testid="page-description" className="text-secondary">
          This is a portal for exporting country data
        </p>
      </div>
      <Button
        type="submit"
        data-testid="page-export-button"
        className="btn-primary"
        onClick={handleButtonClick}
      >
        Export JSON
      </Button>
    </Container>
  );
}

export default DataExport;
