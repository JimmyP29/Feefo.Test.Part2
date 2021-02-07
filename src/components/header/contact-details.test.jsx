import { render, screen } from '@testing-library/react';
import ContactDetails from './contact-details';
import { initialSetup } from '../testData';

test('renders contact details', () => {
    const { supportContact } = initialSetup;
    render(<ContactDetails props={supportContact} />);

    const title = screen.getByText('YOUR FEEFO SUPPORT CONTACT');
    const phoneNumber = screen.getByText('020 3362 4208');
    expect(title).toBeInTheDocument();
    expect(phoneNumber).toBeInTheDocument();
});
