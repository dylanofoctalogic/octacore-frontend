import { render } from '@testing-library/react';

import DeleteTechnologyModal from './delete-technology-modal';

describe('DeleteTechnologyModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DeleteTechnologyModal />);
    expect(baseElement).toBeTruthy();
  });
});
