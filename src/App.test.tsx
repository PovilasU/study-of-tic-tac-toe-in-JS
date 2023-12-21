import {render,screen} from '@testing-library/react';
import matchers from '@testing-library/jest-dom';
expect.extend(matchers);
import App from './App';


it('Should have JavaScript library', () => {
  render(<App />);
  const message = screen.queryByText(/JavaScript library/i);
  expect(message).toBeVisible();
});