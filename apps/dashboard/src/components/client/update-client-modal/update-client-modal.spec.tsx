import { render } from '@testing-library/react';

import UpdateClientModal from './update-client-modal';

describe('UpdateClientModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UpdateClientModal />);
    expect(baseElement).toBeTruthy();
  });
});
