import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {CustomColorPicker} from "./CustomColorPicker";
import {Alert} from 'react-native';

jest.spyOn(Alert, 'alert');

jest.mock('react-native-color-picker', () => {
    const {View, Button} = require('react-native');
    return {
        // eslint-disable-next-line react/prop-types
        ColorPicker: ({onColorSelected}) => (
            <View testID="mock-color-picker">
                <Button title="Select Red" onPress={() => onColorSelected('red')} />
            </View>
        )
    };
});

describe('CustomColorPicker Component', () => {
    const mockOnPress = jest.fn();
    const props = {
        value: '#000000',
        onChange: mockOnPress,
        text: 'testing component'
    };

    it('renders correctly', () => {
        render(<CustomColorPicker {...props} />);
        expect(screen.getByText('testing component')).toBeTruthy();
    });

    it('Custom Color Picker Snapshot Validation', () => {
        const {toJSON} = render(<CustomColorPicker {...props} />);
        expect(toJSON()).toMatchSnapshot();
    });

    it('opens modal and selects color', () => {
        render(<CustomColorPicker {...props} />);

        // Open modal
        fireEvent.press(screen.getByText('testing component'));

        // Check if mock color picker is visible
        expect(screen.getByTestId('mock-color-picker')).toBeTruthy();

        // Select color
        fireEvent.press(screen.getByText('Select Red'));

        expect(Alert.alert).toHaveBeenCalledWith('Color selected: red');
        expect(mockOnPress).toHaveBeenCalledWith('red');
    });
});
