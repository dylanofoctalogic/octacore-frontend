import { render } from '@testing-library/react';

import UpdateCategoryModal from './update-category-modal';

describe('UpdateCategoryModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UpdateCategoryModal />);
    expect(baseElement).toBeTruthy();
  });
});
