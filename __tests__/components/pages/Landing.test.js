import React from 'react';
import { render } from 'react-native-testing-library';

import Landing from '../../../components/pages/Landing';

describe("Landing Page / Home Screen", () => {
  let landing;

  beforeAll(() => {
    landing = render(<Landing />)
  });

  test("it renders all inputs as expected", () => {
    expect(landing.toJSON()).toMatchSnapshot();
  })
})
