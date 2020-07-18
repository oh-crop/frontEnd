import Landing from '../../../components/pages/Landing';
import renderer from 'react-test-renderer';
import React from 'react';


describe("Landing Page", () => {
  let landingPage;

  beforeAll(() => {
    landingPage = renderer.create(<Landing />)
  })

  it('Displays the Logo on the Landing Page', () => {
    expect(landingPage.toJSON().children[0].props.source.testUri).toEqual('../../../assets/logo.png');
  })

  it('Displays a button with text "Search Plants"', () => {
    expect(landingPage.toJSON().children[1].children[0].children[0]).toEqual('Search Plants');
  })

  it('Displays a button with text "My Garden"', () => {
    expect(landingPage.toJSON().children[2].children[0].children[0]).toEqual('My Garden');
  })

  it('Landing Page does render', () => {
    expect(landingPage).toMatchSnapshot();
  })
})
