// @flow

import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import App from '..';

describe('App', () => {
  it('handles select and deselect correctly', () => {
    const { container, getByTestId } = render(<App />);

    const firstLi = container.querySelectorAll('.List__item')[0];
    // $FlowFixMe
    expect(firstLi).toBeInTheDocument();

    act(() => {
      fireEvent.click(firstLi);
    });

    expect(firstLi.classList.contains('selected')).toBe(true);

    const selectedItems = getByTestId('selectedItems');
    expect(selectedItems.textContent).toEqual(firstLi.textContent);

    act(() => {
      fireEvent.click(firstLi);
    });
    // $FlowFixMe
    expect(selectedItems).not.toBeInTheDocument();
  });
});
