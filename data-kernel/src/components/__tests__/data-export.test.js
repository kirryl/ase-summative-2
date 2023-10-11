import  { render, screen, cleanup} from '@testing-library/react';
import DataExport from '../data-export';

test('smoke test', () => {
    expect(true).toBe(true)
})

test('should render title', () => {
    render(<DataExport/>);
    const dataExportTitle = screen.getByTestId('page-title');
    expect(dataExportTitle).toBeInTheDocument();
    expect(dataExportTitle).toHaveTextContent('Nations Data');
})

test('should render export button', () => {
    render(<DataExport/>);
    const dataExportButton = screen.getByTestId('page-export-button');
    expect(dataExportButton).toBeInTheDocument();
    expect(dataExportButton).toHaveTextContent('Export JSON');
})

test('should render page description', () => {
    render(<DataExport/>);
    const dataExportDesc = screen.getByTestId('page-description');
    expect(dataExportDesc).toBeInTheDocument();
    expect(dataExportDesc).toHaveTextContent('This is a portal for exporting country data');
})
