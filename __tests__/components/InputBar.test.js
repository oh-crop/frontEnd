import React from 'react';
import { render, cleanup } from 'react-native-testing-library';

import InputBar from '../../components/InputBar';

describe("Landing Page / Home Screen", () => {
  let inputBar;

  beforeEach(() => {
    const onPressMock = jest.fn()
    const onChangeMock = jest.fn()

    inputBar = render(<InputBar
      placeholder={'Test Placeholder Text'}
      buttonText={'Test Button Text'}
      setValue={onChangeMock}
      inputButtonClick={onPressMock}
      />)
  });

  afterEach(cleanup);

  test('test', () => {
    expect(true).toBeTruthy()
  })
})
