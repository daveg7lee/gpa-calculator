/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, cleanup, fireEvent } from '@testing-library/svelte';
import Input from '../components/Input.svelte';

afterEach(() => {
  cleanup();
});

test('should render label and input', () => {
  const { getByTestId, getByText } = render(Input, {
    input: { subject: 'History', score: 99 },
    inputs: [{ subject: 'History', score: 99 }],
  });

  const input = getByTestId('score-input');
  const label = getByText('History');

  expect(input).toHaveValue(99);
  expect(label).toHaveTextContent('History');
});

test('render input when click label', async () => {
  const { getByPlaceholderText, getByText } = render(Input, {
    input: { subject: 'History', score: 99 },
    inputs: [{ subject: 'History', score: 99 }],
  });

  const label = getByText('History');

  await fireEvent.click(label);

  const input = getByPlaceholderText('History');

  expect(input).toHaveAttribute('placeholder', 'History');
});
