import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';

test('renders Account Overview', () => {
  render(<AccountOverview />);

  const accountOverview = screen.getByText('Account Overview');
  expect(accountOverview).toBeInTheDocument();
});
