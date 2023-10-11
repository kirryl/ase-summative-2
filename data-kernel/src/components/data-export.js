import React from 'react';
import Button from 'react-bootstrap/Button';

function DataExport() {
    function handleClickExport(e) {
        e.preventDefault();
        console.log('You clicked export.');
      }

    return (
        <React.Fragment>
            <h1 data-testid="page-title" className="text-primary">Nations Data</h1>
            <text data-testid="page-description" className="text-secondary">This is a portal for exporting country data</text>
            <Button data-testid="page-export-button" className="btn-primary" onClick={handleClickExport}>Export JSON</Button>
        </React.Fragment>
    ) 
}

export default DataExport;
