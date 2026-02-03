import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {HighLowButton} from "./HighLowButton";

describe('HighLowButton Component', () => {
    const mockOnPress = jest.fn();
    const props = {
        onChange: mockOnPress,
        text: 'testing component',
        value: 40
    };

    it('renders correctly', () => {
        render(<HighLowButton {...props} />);
        expect(screen.getByText('testing component')).toBeTruthy();
        expect(screen.getByText('↑')).toBeTruthy();
        expect(screen.getByText('↓')).toBeTruthy();
    });

    it('High Low Button Snapshot Validation', () => {
        const {toJSON} = render(<HighLowButton {...props} />);
        expect(toJSON()).toMatchSnapshot();
    });

    it('calls onChange with correct values when buttons pressed', () => {
        render(<HighLowButton {...props} />);

        fireEvent.press(screen.getByText('↑'));
        expect(mockOnPress).toHaveBeenCalledWith(42);

        fireEvent.press(screen.getByText('↓'));
        expect(mockOnPress).toHaveBeenCalledWith(38);
    });
});
