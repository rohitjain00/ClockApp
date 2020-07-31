import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {ClockDisplay} from './ClockDisplay/ClockDisplay';
import {HighLowButton} from './HighLowButton/HighLowButton';
import {InputFormat} from './InputFormat/InputFormat';
import {FontPicker} from './FontPicker/FontPicker';
import {CustomColorPicker} from './CustomColorPicker/CustomColorPicker';
import {CustomSearchFlatList} from './CustomSearchFlatList/CustomSearchFlatList';

export function ClockController() {
    function getDateTime() {
        return new Date();
    }

    const fonts = [
        'normal',
        'notoserif',
        'sans-serif',
        'sans-serif-light',
        'sans-serif-thin',
        'sans-serif-condensed',
        'sans-serif-medium',
        'serif',
        'Roboto',
        'monospace',
    ];
    const [dateTime, setDateTime] = useState(getDateTime());
    const utcOffsetOfLocalTime = -1 * getDateTime().getTimezoneOffset() / 60;
    const [dateTimeOffset, setDateTimeOffset] = useState(utcOffsetOfLocalTime);

    const [dateFontSize, setDateFontSize] = useState(40);
    const [timeFontSize, setTimeFontSize] = useState(20);

    const [dateFormat, setDateFormat] = useState('DD/MM/YYYY');
    const [timeFormat, setTimeFormat] = useState('HH:mm:ss A');

    const [dateFontFamily, setDateFontFamily] = useState('normal');
    const [timeFontFamily, setTimeFontFamily] = useState('normal');

    const [dateFontColor, setDateFontColor] = useState('#000000');
    const [timeFontColor, setTimeFontColor] = useState('#000000');

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(getDateTime());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View style={styles.clockDisplayContainer}>
                        <ClockDisplay
                            dateTime={dateTime}
                            timeFontSize={timeFontSize}
                            dateFontSize={dateFontSize}
                            dateFormat={dateFormat}
                            timeFormat={timeFormat}
                            dateFontFamily={dateFontFamily}
                            timeFontFamily={timeFontFamily}
                            dateFontColor={dateFontColor}
                            timeFontColor={timeFontColor}
                            zone={dateTimeOffset}
                        />
                    </View>
                    <View style={styles.controller}>
                        <View style={styles.flexRowStyle}>
                            <HighLowButton text={'Change Date Size'} value={dateFontSize} onChange={setDateFontSize}/>
                            <HighLowButton text={'Change Time Size'} value={timeFontSize} onChange={setTimeFontSize}/>
                        </View>
                        <View style={styles.flexRowStyle}>
                            <View>
                                <InputFormat text='Set Date Format' value={dateFormat} onChange={setDateFormat}/>
                            </View>
                            <View>
                                <InputFormat text='Set Time Format' value={timeFormat} onChange={setTimeFormat}/>
                            </View>
                        </View>
                        <View style={styles.flexRowStyle}>
                            <View>
                                <FontPicker
                                    items={fonts}
                                    value={dateFontFamily}
                                    onChange={setDateFontFamily}
                                    text={'Select Font for Date'}
                                />
                            </View>
                            <View>
                                <FontPicker
                                    items={fonts}
                                    value={timeFontFamily}
                                    onChange={setTimeFontFamily}
                                    text={'Select Font for Time'}
                                />
                            </View>
                        </View>
                        <View style={styles.flexRowStyle}>
                            <View>
                                <CustomColorPicker
                                    value={dateFontColor}
                                    onChange={setDateFontColor}
                                    text={'Date Color'}
                                />
                            </View>
                            <View>
                                <CustomColorPicker
                                    value={timeFontColor}
                                    onChange={setTimeFontColor}
                                    text={'Time Color'}
                                />
                            </View>
                        </View>
                        <View>
                            <CustomSearchFlatList
                                text={'Select TimeZone'}
                                onChange={setDateTimeOffset}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    clockDisplayContainer: {
        marginTop: 100,
    },
    flexRowStyle: {
        flex: 1,
        flexDirection: 'row-reverse',
        alignContent: 'space-around',
        justifyContent: 'space-around',
        marginTop: 40,
    },
});
