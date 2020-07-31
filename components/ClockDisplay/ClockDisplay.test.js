//ClockDisplay.test.js
import React from 'react';
import {render} from '@testing-library/react-native';
import { ClockDisplay } from "./ClockDisplay";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ClockDisplay Component', () => {
    const date = new Date(2020, 7, 30, 10, 10, 10);
    const component = <ClockDisplay  dateTime={date} timeFontSize={20} dateFontSize={20} dateFormat={'DD/MM/YYYY'} timeFormat={'HH:mm:ss A'} dateFontFamily={'normal'} timeFontFamily={'normal'} dateFontColor={'#000000'} timeFontColor={'#000000'} zone={0} />
    it('Clock Display Props Validation', async () => {
        const wrapper = mount(component);
        const componentInstance = wrapper.props();
        expect(componentInstance.timeFontSize).toEqual(20);
        expect(componentInstance.dateFontSize).toEqual(20);
        expect(componentInstance.dateFormat).toEqual('DD/MM/YYYY');
        expect(componentInstance.timeFormat).toEqual('HH:mm:ss A');
        expect(componentInstance.dateFontFamily).toEqual('normal');
        expect(componentInstance.timeFontFamily).toEqual('normal');
        expect(componentInstance.dateFontColor).toEqual('#000000');
        expect(componentInstance.timeFontColor).toEqual('#000000');
        expect(componentInstance.zone).toEqual(0);
    });
    it('Clock Display Snapshot Validation', async () => {
        const tree = render(component).toJSON();
        expect(tree).toMatchSnapshot();
    });
});