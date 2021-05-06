/* eslint-disable no-undef */

import { replace } from './func';

describe('Testing func', () => {
  test('Testing replace', () => {
    const num = 1230122;
    const resNum = '1 230 122';

    expect(replace(num)).toBe(resNum);
    expect(replace(num.toString())).toBe(resNum);
  });
});
