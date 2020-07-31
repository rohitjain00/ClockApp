import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Moment from 'moment';
import PropTypes from 'prop-types';

export function ClockDisplay(props) {
    function dateStyle() {
        return {
            fontSize: props.dateFontSize,
            fontFamily: props.dateFontFamily,
            color: props.dateFontColor,
        };
    }

    function timeStyle() {
        return {
            fontSize: props.timeFontSize,
            fontFamily: props.timeFontFamily,
            color: props.timeFontColor,
        };
    }

    return (
        <View style={styles.container}>
            <Text style={timeStyle()}>{Moment(props.dateTime).utcOffset(props.zone).format(props.timeFormat)}</Text>
            <Text style={dateStyle()}>{Moment(props.dateTime).utcOffset(props.zone).format(props.dateFormat)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: "100px"
    },
});

ClockDisplay.propTypes = {
    dateFontSize: PropTypes.number,
    dateFontFamily: PropTypes.string,
    dateFontColor: PropTypes.string,
    timeFontSize: PropTypes.number,
    timeFontFamily: PropTypes.string,
    timeFontColor: PropTypes.string,
    timeFormat: PropTypes.string,
    dateFormat: PropTypes.string,
    dateTime: PropTypes.instanceOf(Date),
    zone: PropTypes.number
}