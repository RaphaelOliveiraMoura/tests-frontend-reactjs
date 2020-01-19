import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Header from '../../src/Header';

import history from '../../src/services/history';

describe('Header component', () => {
  it('should be able render header items', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Home')).toBeTruthy();
    expect(getByText('Products')).toBeTruthy();
    expect(getByText('Profile')).toBeTruthy();
    expect(getByText('Contact')).toBeTruthy();
  });

  it('should navigate when click in some header item', () => {
    history.push = jest.fn();

    const { getByText } = render(<Header />);

    fireEvent.click(getByText('Home'));

    expect(history.push).toHaveBeenCalledWith('/home');
  });
});
