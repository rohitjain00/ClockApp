import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {ClockDisplay} from "./ClockDisplay";

describe('ClockDisplay Component', () => {
    // 2020-08-30T10:10:10Z
    const date = new Date('2020-08-30T10:10:10Z');

    const props = {
        dateTime: date,
        timeFontSize: 20,
        dateFontSize: 20,
        dateFormat: 'DD/MM/YYYY',
        timeFormat: 'HH:mm:ss A',
        dateFontFamily: 'normal',
        timeFontFamily: 'normal',
        dateFontColor: '#000000',
        timeFontColor: '#000000',
        zone: 0
    };

    it('renders correctly with given props', () => {
        render(<ClockDisplay {...props} />);

        // Since zone is 0, it should display UTC time.
        // 10:10:10 AM
        // 30/08/2020
        expect(screen.getByText('10:10:10 AM')).toBeTruthy();
        expect(screen.getByText('30/08/2020')).toBeTruthy();
    });

    it('Clock Display Snapshot Validation', () => {
        const {toJSON} = render(<ClockDisplay {...props} />);
        expect(toJSON()).toMatchSnapshot();
    });
});
