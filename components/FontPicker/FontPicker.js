import React from 'react';
import {Picker, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

export function FontPicker(props) {
    function changeValue(text) {
        props.onChange(text);
    }

    function pickerList() {
        return (props.items.map((x, i) => {
            return (<Picker.Item label={x} key={i} value={x}/>);
        }));
    }

    return (
        <View style={styles.container}>
            <Text>{props.text}</Text>
            <Picker
                selectedValue={props.value}
                onValueChange={(value) => {
                    changeValue(value);
                }}>
                {pickerList()}
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        textAlign: 'center',
    },
});

FontPicker.propTypes = {
    text: PropTypes.string,
    value: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func
}
