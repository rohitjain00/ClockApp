//CustomColorPicker.test.js
import React from 'react';
import {render} from '@testing-library/react-native';
import {CustomSearchFlatList} from "./CustomSearchFlatList";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('CustomSearchFlatList Component', async () => {
    const mockOnPress = jest.fn();
    const component = <CustomSearchFlatList onChange={mockOnPress} text={'testing component'}/>
    let wrapper;
    beforeEach(() => {
        wrapper = mount(component);
        jest.clearAllMocks();
    })
    it('Custom Search Flat List Props Validation', async () => {
        const componentProps = wrapper.props();
        expect(componentProps.onChange).toEqual(mockOnPress);
        expect(componentProps.text).toEqual('testing component');
    });
    it('Custom Search Flat List Snapshot Validation', async () => {
        const tree = render(component).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Custom Search Flat List Action Validation', async () => {
        // https://github.com/enzymejs/enzyme/issues/2263#issuecomment-568585047
        // According to above statement We cannot interact with state inside a function with useState.
    });
    it('Custom Search Flat List Return', async () => {
        wrapper.props().onChange(10);
        expect(mockOnPress).toHaveBeenCalled();
        expect(mockOnPress).toHaveBeenCalledTimes(1);
        wrapper.props().onChange(12);
        expect(mockOnPress).toHaveBeenCalledTimes(2);
    });
});