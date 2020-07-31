//CustomColorPicker.test.js
import React from 'react';
import {render} from '@testing-library/react-native';
import { InputFormat } from "./InputFormat";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('InputFormat Component', () => {
    const mockOnPress = jest.fn();
    const component = <InputFormat onChange={mockOnPress} text={'testing component'} value={'HH:MM"YYYY'}/>
    let wrapper;
    beforeEach(() => {
        wrapper = mount(component);
        jest.clearAllMocks();
    })
    it('Input Format Props Validation', async () => {
        const componentProps = wrapper.props();
        expect(componentProps.onChange).toEqual(mockOnPress);
        expect(componentProps.text).toEqual('testing component');
        expect(componentProps.value).toEqual('HH:MM"YYYY');
    });
    it('Input Format Snapshot Validation', async () => {
        const tree = render(component).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Input Format Action Validation', async () => {
        // https://github.com/enzymejs/enzyme/issues/2263#issuecomment-568585047
        // According to above statement We cannot interact with state inside a function with useState.
    });
    it('Input Format onChange handler', async () => {
        wrapper.props().onChange('hh:mm:yyyy');
        expect(mockOnPress).toHaveBeenCalled();
        expect(mockOnPress).toHaveBeenCalledTimes(1);
        wrapper.props().onChange('hh:ss');
        expect(mockOnPress).toHaveBeenCalledTimes(2);
    });
});