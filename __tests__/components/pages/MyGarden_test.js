import MyGarden from '../../../components/pages/MyGarden';
import renderer from 'react-test-renderer';
import React from 'react';


describe("MyGarden Page", () => {
  let myGardenPage;

  beforeAll(() => {
    myGardenPage = renderer.create(<MyGarden />)
  })

  it('MyGarden Page does render', () => {
    expect(myGardenPage).toMatchSnapshot();
  })
})
