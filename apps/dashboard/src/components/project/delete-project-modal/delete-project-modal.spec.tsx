import { render } from '@testing-library/react';

import DeleteProjectModal from './delete-project-modal';

describe('DeleteProjectModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DeleteProjectModal />);
    expect(baseElement).toBeTruthy();
  });
});
