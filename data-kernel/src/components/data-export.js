import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import useLoadCountries from "../hooks/use-countries-api";
import { useState } from "react";

function DataExport() {
  const { data, loading, error, getData } = useLoadCountries();

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
        onClick={() => getData}
      >
        Export JSON
      </Button>
    </Container>
  );
}

export default DataExport;
