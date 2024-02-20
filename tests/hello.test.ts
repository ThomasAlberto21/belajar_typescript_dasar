import { sayHello } from '../src/hello';

describe('say hello test', () => {
  it('should say Hello Thomas Alberto', () => {
    expect(sayHello('Thomas Alberto')).toBe('Hello Thomas Alberto');
  });
});
