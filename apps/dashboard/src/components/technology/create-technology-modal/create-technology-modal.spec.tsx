import { render } from '@testing-library/react';

import CreateTechnologyModal from './create-technology-modal';

describe('CreateTechnologyModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateTechnologyModal />);
    expect(baseElement).toBeTruthy();
  });
});
