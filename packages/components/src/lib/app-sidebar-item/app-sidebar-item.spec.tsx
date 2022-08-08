import { render } from '@testing-library/react';

import AppSidebarItem from './app-sidebar-item';

describe('AppSidebarItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppSidebarItem />);
    expect(baseElement).toBeTruthy();
  });
});
