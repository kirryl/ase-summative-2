import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState } from "react";

function DataExport() {
  const [data, setData] = useState(null);

  const handleClickExport = async () => {
    try {
      const data = await (
        await fetch(`https://restcountries.com/v3.1/all`)
      ).json();
      setData(data);
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
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
        onClick={handleClickExport}
      >
        Export JSON
      </Button>
    </Container>
  );
}

export default DataExport;
