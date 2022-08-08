import { render } from '@testing-library/react';

import OctalogicAppProvider from './octalogic-app-provider';

describe('OctalogicAppProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OctalogicAppProvider />);
    expect(baseElement).toBeTruthy();
  });
});
