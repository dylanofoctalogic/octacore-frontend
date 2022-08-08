import { render } from '@testing-library/react';

import QueryKeys from './query-keys';

describe('QueryKeys', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QueryKeys />);
    expect(baseElement).toBeTruthy();
  });
});
