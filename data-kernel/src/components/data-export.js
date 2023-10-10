import React from 'react';
import Button from 'react-bootstrap/Button';

function dataExport() {
    function handleClickExport(e) {
        e.preventDefault();
        console.log('You clicked export.');
      }

    return (
        <React.Fragment>
            <h1 className="text-primary">Nations Data</h1>
            <body>This is a portal for exporting country data</body>
            <Button className="btn-primary" onClick={handleClickExport}>Export JSON</Button>
        </React.Fragment>
    ) 
}

export default dataExport;
