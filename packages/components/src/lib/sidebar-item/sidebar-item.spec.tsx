import { render } from '@testing-library/react';

import SidebarItem from './sidebar-item';

describe('SidebarItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SidebarItem />);
    expect(baseElement).toBeTruthy();
  });
});
