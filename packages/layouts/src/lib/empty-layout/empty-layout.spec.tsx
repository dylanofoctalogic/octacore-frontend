import { render } from '@testing-library/react';

import EmptyLayout from './empty-layout';

describe('EmptyLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmptyLayout />);
    expect(baseElement).toBeTruthy();
  });
});
