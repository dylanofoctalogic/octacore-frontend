import { render } from '@testing-library/react';

import DeleteCategoryModal from './delete-client-modal';

describe('DeleteCategoryModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DeleteCategoryModal />);
    expect(baseElement).toBeTruthy();
  });
});
