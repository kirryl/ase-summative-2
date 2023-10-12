import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useState } from "react";

function DataExport() {
  // const { data, loading, error, getData } = useLoadCountries();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseURL = "https://restcountries.com/v3.1";

  function loadCountries() {
    setLoading(true);
    axios
      .get(`${baseURL}/all`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((er) => {
        setError(er);
        setLoading(false);
      });
  }

  const downloadFile = ({ data, fileName, fileType }) => {
    // Create a blob with the data we want to download as a file
    const blob = new Blob([data], { type: fileType });
    // Create an anchor element and dispatch a click event on it
    // to trigger a download
    const a = document.createElement("a");
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };

  const handleButtonClick = () => {
    loadCountries();
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
