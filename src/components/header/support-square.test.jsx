import { render, screen } from '@testing-library/react';
import SupportSquare from './support-square';

test('renders the support square icon', () => {
    render(<SupportSquare />);

    const letterS = screen.getByText('S');
    expect(letterS).toBeInTheDocument();
});
