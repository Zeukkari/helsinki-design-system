import React from 'react';
import { render } from '@testing-library/react';

import Sidebar from './Sidebar';

describe('<Sidebar /> spec', () => {
  it('renders the component', () => {
    const { asFragment } = render(<Sidebar />);
    expect(asFragment()).toMatchSnapshot();
  });
});