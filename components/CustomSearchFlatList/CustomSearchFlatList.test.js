import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {CustomSearchFlatList} from "./CustomSearchFlatList";
import {Alert} from 'react-native';

jest.spyOn(Alert, 'alert');

describe('CustomSearchFlatList Component', () => {
    const mockOnPress = jest.fn();
    const props = {
        onChange: mockOnPress,
        text: 'Select TimeZone'
    };

    it('renders correctly', () => {
        render(<CustomSearchFlatList {...props} />);
        expect(screen.getByText('Select TimeZone')).toBeTruthy();
    });

    it('Custom Search Flat List Snapshot Validation', () => {
        const {toJSON} = render(<CustomSearchFlatList {...props} />);
        expect(toJSON()).toMatchSnapshot();
    });

    it('opens modal and selects timezone', () => {
        render(<CustomSearchFlatList {...props} />);

        // Open modal
        fireEvent.press(screen.getByText('Select TimeZone'));

        // Search for "GMT"
        const input = screen.getByPlaceholderText('Search Here');
        fireEvent.changeText(input, 'GMT');

        // Should find item with GMT.
        const items = screen.getAllByText('GMT Standard Time');

        fireEvent.press(items[0]);

        expect(Alert.alert).toHaveBeenCalledWith('Selected TimeZone : GMT Standard Time');
        expect(mockOnPress).toHaveBeenCalled();
    });
});
