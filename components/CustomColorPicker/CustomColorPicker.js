import React, {useState} from 'react';
import {Alert, Button, Modal, StyleSheet, View} from 'react-native';
import {ColorPicker} from 'react-native-color-picker';
import Slider from '@react-native-community/slider';
import PropTypes from 'prop-types';

export function CustomColorPicker(props) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <ColorPicker
                    sliderComponent={Slider}
                    onColorSelected={(color) => {
                        Alert.alert(`Color selected: ${color}`);
                        props.onChange(color);
                        setModalVisible(false);
                    }}
                    style={styles.colorPicker}
                />
                <Button
                    title="close"
                    onPress={() => {
                        setModalVisible(false);
                    }}
                />
            </Modal>
            <Button
                title={props.text}
                onPress={() => {
                    setModalVisible(true);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    colorPicker: {
        flex: 1
    },
    container: {
        marginTop: 20,
    },

});

CustomColorPicker.propTypes = {
    onChange: PropTypes.func,
    text: PropTypes.string
}
