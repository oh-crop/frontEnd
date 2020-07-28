import React from 'react';
import { render, cleanup } from 'react-native-testing-library';

import NamePlant from '../../../components/pages/NamePlant';

describe("Landing Page / Home Screen", () => {
  let namePlant;

  beforeEach(() => {
    namePlant = render(<NamePlant />)
  });

  afterEach(cleanup);

  test('renders "Give your new crop a name" to screen', () => {
    const instruction = namePlant.getByText('Give your new crop a name')

    expect(instruction).toBeTruthy();
  })

  test('has search input bar', () => {
    const inputBar = namePlant.getByPlaceholder('Enter plant name');

    expect(inputBar).toBeTruthy();
  })

  test('has search button', () => {
    const searchButton = namePlant.getByText('Add Plant');

    expect(searchButton).toBeTruthy();
  })

  test('has go back button', () => {
    const goBackButton = namePlant.getByText('Go Back')

    expect(goBackButton).toBeTruthy();
  })

  test('everything renders as expected', () => {
    expect(namePlant.toJSON()).toMatchSnapshot()
  })
})
