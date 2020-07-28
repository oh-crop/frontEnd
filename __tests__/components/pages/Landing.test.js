import React from 'react';
import { render, cleanup, fireEvent } from 'react-native-testing-library';

import Landing from '../../../components/pages/Landing';

describe("Landing Page / Home Screen", () => {
  let landing;

  beforeEach(() => {
    landing = render(<Landing />)
  });

  afterEach(cleanup);

  test('it displays the logo', () => {
    const image = landing.getByTestId("Landing.Image")

    expect(image.props.source.testUri).toBe('../../../assets/logo.png')
    expect(image.type).toBe('Image')
  })

  test('renders "Search Plants" button', () => {
    const searchButton = landing.queryByText('Search Plants')

    expect(searchButton).toBeTruthy()
  })

  test('renders "My Garden" button', () => {
    const gardenButton = landing.queryByText('My Garden')

    expect(gardenButton).toBeTruthy()
  })

  test("it renders home page as expected", () => {
    expect(landing.toJSON()).toMatchSnapshot();
  })
})
