import React from 'react';
import { render, cleanup, fireEvent } from 'react-native-testing-library';

import GardenPlant from '../../components/GardenPlant';

describe("Garden Plant", () => {
  let gardenPlant;
  const onPressMock = jest.fn();

  const info = {
    plant_name: 'Test Plant Name'
  }

  beforeEach(() => {

    gardenPlant = render(<GardenPlant
        info={info}
      />)
  });

  afterEach(cleanup);

  test('it renders touchable opacity', () => {
    const touchable = gardenPlant.getByTestId('GardenPlant.TouchableOpacity')

    expect(touchable).toBeTruthy()
  })

  test('it renders icon', () => {
    const icon = gardenPlant.getByTestId('GardenPlant.Icon')

    expect(icon).toBeTruthy()
  })

  test('it renders name of plant', () => {
    const name = gardenPlant.getByText('Test Plant Name')

    expect(name).toBeTruthy
  })

  test('it renders / snapshot test', () => {
    expect(gardenPlant).toMatchSnapshot()
  })
})
