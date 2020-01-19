/* eslint-disable no-undef */
import packageJson from '../../package.json';

it('should mock a function when automock is setted in jest settings', () => {
  if (packageJson.jest.globals) {
    expect(__DEV__).toBe(true);
  } else {
    expect(__DEV__).toBe(undefined);
  }
});
