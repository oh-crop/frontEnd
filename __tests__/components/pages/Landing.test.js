import React from 'react';
import { render, cleanup } from 'react-native-testing-library';

import Landing from '../../../components/pages/Landing';

describe("Landing Page / Home Screen", () => {

  afterEach(cleanup);

  test('it displays the logo', () => {
    const { getByTestId } = render(<Landing />)

    const image = getByTestId("Landing.Image")

    expect(image.props.source.testUri).toBe('../../../assets/logo.png')
    expect(image.type).toBe('Image')
  })

  test('renders "Search Plants" button', () => {
    const { queryByText } = render(<Landing />)
    expect(queryByText('Search Plants')).not.toBeNull()
    // console.log(findByText('Search Plants').type)
  })

  test('renders "My Garden" button', () => {
    const { queryByText } = render(<Landing />)
    expect(queryByText('My Garden')).not.toBeNull()
  })

  test("it renders home page as expected", () => {
    const { toJSON } = render(<Landing />)
    expect(toJSON()).toMatchSnapshot();
  })
})
