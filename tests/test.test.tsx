import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

it('hello world', async () => {
  const { getByText } = render(
    <div>
      <h1>hello world</h1>
    </div>
  );
  expect(getByText('hello world'));
});
