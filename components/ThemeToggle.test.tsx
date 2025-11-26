import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeToggle from './ThemeToggle';
import { Provider } from 'react-redux';
import { store } from '@/store';

function renderWithStore(ui: React.ReactElement) {
  return render(<Provider store={store}>{ui}</Provider>);
}

describe('ThemeToggle', () => {
  it('renders the toggle button', () => {
    renderWithStore(<ThemeToggle />);
    expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument();
  });

  it('toggles aria-pressed on click', async () => {
    const user = userEvent.setup();
    renderWithStore(<ThemeToggle />);

    const btn = screen.getByRole('button', { name: /toggle theme/i });
    const initialPressed = btn.getAttribute('aria-pressed');
    await user.click(btn);
    const afterPressed = btn.getAttribute('aria-pressed');

    expect(afterPressed).not.toBe(initialPressed);
  });
});





