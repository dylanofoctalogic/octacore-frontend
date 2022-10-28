import { render } from '@testing-library/react';

import UpdateTechnologyModal from './update-technology-modal';

describe('UpdateTechnologyModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UpdateTechnologyModal />);
    expect(baseElement).toBeTruthy();
  });
});
