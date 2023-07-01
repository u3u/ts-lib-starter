import { expect, it } from 'vitest';
import { foo } from '../src';

it('should be defined', () => {
  expect(foo).toBeDefined();
  expect(foo()).toBe('foo');
});
