//CustomColorPicker.test.js
import React from 'react';
import {render} from '@testing-library/react-native';
import {HighLowButton} from "./HighLowButton";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('HighLowButton Component', () => {
    const mockOnPress = jest.fn();
    const component = <HighLowButton onChange={mockOnPress} text={'testing component'} value={40}/>
    let wrapper;
    beforeEach(() => {
        wrapper = mount(component);
        jest.clearAllMocks();
    })
    it('High Low Button Props Validation', async () => {
        const componentProps = wrapper.props();
        expect(componentProps.onChange).toEqual(mockOnPress);
        expect(componentProps.text).toEqual('testing component');
        expect(componentProps.value).toEqual(40);
    });
    it('High Low Button Snapshot Validation', async () => {
        const tree = render(component).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('High Low Button Action Validation', async () => {
        // https://github.com/enzymejs/enzyme/issues/2263#issuecomment-568585047
        // According to above statement We cannot interact with state inside a function with useState.
    });
    it('High Low Button onChange handler', async () => {
        wrapper.props().onChange(38);
        expect(mockOnPress).toHaveBeenCalled();
        expect(mockOnPress).toHaveBeenCalledTimes(1);
        wrapper.props().onChange(42);
        expect(mockOnPress).toHaveBeenCalledTimes(2);
    });
});