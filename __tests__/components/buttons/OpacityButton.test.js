import React from 'react';
import { render, cleanup, fireEvent } from 'react-native-testing-library';

import { OpacityButton } from '../../../components/buttons/OpacityButton';

describe("TouchableOpacity Button", () => {
  let button;

  beforeEach(() => {
    onPressMock = jest.fn();

    button = render(<OpacityButton
                      text={"Test Text"}
                      pressFunction={onPressMock}/>);
  });

  afterEach(cleanup)

  test("renders the passed text", () => {
    const thisButton = button.queryByText('Test Text');

    expect(thisButton).not.toBeNull();
  })

  test('will fire the onPress event', () => {
    const thisButton = button.getByText('Test Text');

    fireEvent.press(thisButton);
    expect(onPressMock).toHaveBeenCalled();
  })

  test('will render as expected', () => {
    expect(button.toJSON()).toMatchSnapshot()
  })

})
