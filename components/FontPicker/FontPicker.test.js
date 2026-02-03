import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {FontPicker} from "./FontPicker";

describe('FontPicker Component', () => {
    const mockOnPress = jest.fn();
    const props = {
        onChange: mockOnPress,
        text: 'testing component',
        items: ['test', 'test2'],
        value: 'test'
    };

    it('renders correctly', () => {
        render(<FontPicker {...props} />);
        expect(screen.getByText('testing component')).toBeTruthy();
    });

    it('Font Picker Snapshot Validation', () => {
        const {toJSON} = render(<FontPicker {...props} />);
        expect(toJSON()).toMatchSnapshot();
    });

    it('calls onChange when value changes', () => {
        render(<FontPicker {...props} />);
        const picker = screen.getByTestId('font-picker');

        fireEvent(picker, 'onValueChange', 'test2');
        expect(mockOnPress).toHaveBeenCalledWith('test2');
    });
});
