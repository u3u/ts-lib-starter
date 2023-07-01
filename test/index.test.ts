import { expect, it } from 'vitest';
import { foo } from '../src';

it('Should be defined', () => {
  expect(foo).toBeDefined();
  expect(foo()).toBe('foo');
});
