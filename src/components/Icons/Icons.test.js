import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Icons from './Icons';

describe('Icons test', () => {
  test('Icons smoke test', () => {
    render(<Icons type='' color='' filled widht={30} height={30} />);
  });
  // test('Icons onClick test', () => {
  //   const func = jest.fn();
  //   const { getByTestId } = render(
  //     <Icons type='navHeart' color='black' widht={30} filled height={30} onCLick={func} className='' />
  //   );
  //   const icon = getByTestId('icon');
  //   userEvent.click(icon);
  //   expect(func).toBeCalled();
  // });
});
