/* eslint-disable no-undef */

import { formatPrice } from '../../src/utils/formatPrice';

it('should mock a function when automock is setted in jest settings', () => {
  if (automock) {
    expect(formatPrice.mock).toBeTruthy();

    formatPrice.mockReturnValue('mock_response');

    expect(formatPrice(15.2)).toBe('mock_response');
  } else {
    expect(formatPrice(15.2)).toBe('R$15.20');
  }
});
