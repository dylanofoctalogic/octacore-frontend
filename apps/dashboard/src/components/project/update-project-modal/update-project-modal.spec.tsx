import { render } from '@testing-library/react';

import UpdateProjectModal from './update-project-modal';

describe('UpdateProjectModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UpdateProjectModal />);
    expect(baseElement).toBeTruthy();
  });
});
