import React from 'react';
import { render, cleanup, fireEvent } from 'react-native-testing-library';

import InputBar from '../../components/InputBar';

describe("Landing Page / Home Screen", () => {
  let inputBar;
  const onPressMock = jest.fn();
  const onChangeTextMock = jest.fn();

  beforeEach(() => {

    inputBar = render(<InputBar
      placeholder={'Test Placeholder Text'}
      buttonText={'Test Button Text'}
      setValue={onChangeTextMock}
      inputButtonClick={onPressMock}
      />)
  });

  afterEach(cleanup);

  test('it renders input with placeholder text', () => {
    const input = inputBar.getByPlaceholder('Test Placeholder Text')

    expect(input).toBeTruthy();
  });

  test('it renders button with text', () => {
    const button = inputBar.getByText('Test Button Text')

    expect(button).toBeTruthy();
  })

  test('it triggers onChange when text changes', () => {
    const input = inputBar.getByPlaceholder('Test Placeholder Text')

    fireEvent(input, 'onChangeText', "Testing!")
    expect(onChangeTextMock).toHaveBeenCalledWith("Testing!")

  })

  test('it triggers onPress when button is pressed', () => {
    const button = inputBar.getByText('Test Button Text')

    fireEvent(button, 'onPress')
    expect(onPressMock).toHaveBeenCalledTimes(1)

    fireEvent(button, 'onPress')
    expect(onPressMock).toHaveBeenCalledTimes(2)
  })

  test('it renders snapshot test', () => {
    expect(inputBar).toMatchSnapshot()
  })

})
