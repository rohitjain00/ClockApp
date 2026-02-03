import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {InputFormat} from "./InputFormat";

describe('InputFormat Component', () => {
    const mockOnPress = jest.fn();
    const props = {
        onChange: mockOnPress,
        text: 'testing component',
        value: 'HH:MM"YYYY'
    };

    it('renders correctly', () => {
        render(<InputFormat {...props} />);
        expect(screen.getByText('testing component')).toBeTruthy();
        expect(screen.getByDisplayValue('HH:MM"YYYY')).toBeTruthy();
    });

    it('Input Format Snapshot Validation', () => {
        const {toJSON} = render(<InputFormat {...props} />);
        expect(toJSON()).toMatchSnapshot();
    });

    it('calls onChange when text changes', () => {
        render(<InputFormat {...props} />);
        const input = screen.getByDisplayValue('HH:MM"YYYY');

        fireEvent.changeText(input, 'hh:mm:yyyy');
        expect(mockOnPress).toHaveBeenCalledWith('hh:mm:yyyy');
    });
});
