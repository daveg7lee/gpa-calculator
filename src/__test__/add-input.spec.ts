/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/svelte';
import AddInput from '../components/AddInput.svelte';

afterEach(() => {
  cleanup();
});

test('should render one input & one button', () => {
  const { getByRole } = render(AddInput, {
    inputs: [{ subject: 'History', score: 99 }],
  });

  const button = getByRole('button');
  const input = getByRole('textbox');

  expect(button).toHaveTextContent('Add');
  expect(input).toHaveAttribute('placeholder', 'Add new Subject you want');
});
