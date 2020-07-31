import React, {useState} from 'react';
import {Button, Modal, StyleSheet, View} from 'react-native';
import {ColorPicker} from 'react-native-color-picker';
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
                    onColorSelected={(color) => {
                        alert(`Color selected: ${color}`);
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