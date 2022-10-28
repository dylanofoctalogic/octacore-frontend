import { render } from '@testing-library/react';

import Miscellaneous from './miscellaneous';

describe('Miscellaneous', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Miscellaneous />);
    expect(baseElement).toBeTruthy();
  });
});
