//CustomColorPicker.test.js
import React from 'react';
import {render} from '@testing-library/react-native';
import { CustomColorPicker } from "./CustomColorPicker";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CustomColorPicker Component', () => {
    const mockOnPress = jest.fn();
    const component = <CustomColorPicker  value={'#000000'} onChange={mockOnPress} text={'testing component'} />
    let wrapper;
    beforeEach(() => {
        wrapper = mount(component);
        jest.clearAllMocks();
    })
    it('Custom Color Picker Props Validation', async () => {
        const componentProps = wrapper.props();
        expect(componentProps.value).toEqual('#000000');
        expect(componentProps.onChange).toEqual(mockOnPress);
        expect(componentProps.text).toEqual('testing component');
    });
    it('Custom Color Picker Snapshot Validation', () => {
        const tree = render(component).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Custom Color Picker Action Validation', async () => {
        // console.log(wrapper.instance());
        // console.log(wrapper.childAt(1));
        // console.log(wrapper.state(['modalVisible']));
        // wrapper.childAt(1).onPressHandler();
        // expect(wrapper.state(['modalVisible'])).toEqual(true);
        // https://github.com/enzymejs/enzyme/issues/2263#issuecomment-568585047
        // According to above statement We cannot interact with state inside a hooks.
    });
    it('Custom Color Picker onChange Checker', async () => {
        wrapper.props().onChange('#eeeeee');
        expect(mockOnPress).toHaveBeenCalled();
        expect(mockOnPress).toHaveBeenCalledTimes(1);
    });
});