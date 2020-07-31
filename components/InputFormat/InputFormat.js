import React from 'react';
import {Linking, StyleSheet, Text, TextInput, View} from 'react-native';
import PropTypes from 'prop-types';

export function InputFormat(props) {
    function changeText(text) {
        props.onChange(text);
    }

    return (
        <View style={styles.container}>
            <Text
                onPress={() => Linking.openURL('https://momentjs.com/docs/#/displaying/')}>
                {props.text}
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => changeText(text)}
                defaultValue={props.value}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
});

InputFormat.propTypes = {
    onChange: PropTypes.func,
    text: PropTypes.string,
    value: PropTypes.string
}