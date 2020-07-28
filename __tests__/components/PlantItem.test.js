import React from 'react';
import { render, cleanup, fireEvent } from 'react-native-testing-library';

import PlantItem from '../../components/PlantItem';

describe("Plant Item", () => {
  let plantItem;

  beforeEach(() => {

    plantItem = render(<PlantItem
        title={'Test Title'}
      />)
  });

  afterEach(cleanup);

  test('it renders title', () => {
    let title = plantItem.getByText('Test Title')

    expect(title).toBeTruthy()
  })

  test('it renders image', () => {
    let image = plantItem.getByTestId('PlantItem.Image')

    expect(image).toBeTruthy()
  })

  test('it renders / snapshot test', () => {
    expect(plantItem).toMatchSnapshot()
  })
})
