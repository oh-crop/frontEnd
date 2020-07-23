import PlantInfo from '../../../components/pages/PlantInfo';
import renderer from 'react-test-renderer';
import React from 'react';


describe("PlantInfo Page", () => {
  let plantInfoPage;

  beforeAll(() => {
    plantInfoPage = renderer.create(<PlantInfo />)
  })

  it('PlantInfo Page does render', () => {
    expect(plantInfoPage).toMatchSnapshot();
  })
})
