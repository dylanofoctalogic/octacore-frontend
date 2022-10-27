import { render } from '@testing-library/react';

import CreateCategoryModal from './create-category-modal';

describe('CreateCategoryModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateCategoryModal />);
    expect(baseElement).toBeTruthy();
  });
});
