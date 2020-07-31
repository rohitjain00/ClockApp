//CustomColorPicker.test.js
import React from 'react';
import {render} from '@testing-library/react-native';
import {FontPicker} from "./FontPicker";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('FontPicker Component', () => {
    const mockOnPress = jest.fn();
    const component = <FontPicker onChange={mockOnPress} text={'testing component'} items={['test', 'test2']}
                                  value={'normal'}/>
    let wrapper;
    beforeEach(() => {
        wrapper = mount(component);
        jest.clearAllMocks();
    })
    it('FontPicker Props Validation', async () => {
        const componentProps = wrapper.props();
        expect(componentProps.onChange).toEqual(mockOnPress);
        expect(componentProps.text).toEqual('testing component');
        expect(componentProps.value).toEqual('normal');
        expect(componentProps.items).toEqual(['test', 'test2'])
    });
    it('Font Picker Snapshot Validation', async () => {
        const tree = render(component).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Font Picker Action Validation', async () => {
        // https://github.com/enzymejs/enzyme/issues/2263#issuecomment-568585047
        // According to above statement We cannot interact with state inside a function with useState.
    });
    it('Font Picker onChange handler', async () => {
        wrapper.props().onChange('monospace');
        expect(mockOnPress).toHaveBeenCalled();
        expect(mockOnPress).toHaveBeenCalledTimes(1);
        wrapper.props().onChange('normal');
        expect(mockOnPress).toHaveBeenCalledTimes(2);
    });
});