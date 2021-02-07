import { render, screen } from '@testing-library/react';
import SalesDetails from './sales-details';
import { initialSetup } from '../testData';

test('renders sales details', () => {
    const { salesOverview: { successfulUploads, linesSaved } } = initialSetup;
    render(<SalesDetails props={{ successfulUploads, linesSaved }} />);

    const title = screen.getByText('Sales');
    expect(title).toBeInTheDocument();
});
