import PlantProfile from '../../../components/pages/PlantProfile';
import renderer from 'react-test-renderer';
import React from 'react';


describe("PlantProfile Page", () => {
  let plantProfilePage;

  beforeAll(() => {
    plantProfilePage = renderer.create(<PlantProfile />)
  })

  it('PlantProfile Page does render', () => {
    expect(plantProfilePage).toMatchSnapshot();
  })
})
