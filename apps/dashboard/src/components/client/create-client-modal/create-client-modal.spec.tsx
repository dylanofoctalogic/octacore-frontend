import { render } from '@testing-library/react';

import CreateClientModal from './create-client-modal';

describe('CreateClientModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateClientModal />);
    expect(baseElement).toBeTruthy();
  });
});
