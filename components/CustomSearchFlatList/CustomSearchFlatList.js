import React, {useState} from 'react';
import {Alert, Button, FlatList, Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import PropTypes from 'prop-types';

export function CustomSearchFlatList(props) {
    const timeZones = require('./timeZones.json');

    const [data, setData] = useState(timeZones);
    const [searchText, setSearchText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);


    const searchData = (text) => {
        const newData = timeZones.filter((item) => {
            const itemData = item.value.toUpperCase();
            const textData = searchText.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setData(newData);
        setSearchText(text);
    };
    const reset = () => {
        setData(timeZones);
        setSearchText('');
    };

    const itemSeparator = () => {
        return (
            <View
                style={styles.itemSeparator}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => searchData(text)}
                    value={searchText}
                    underlineColorAndroid='transparent'
                    placeholder="Search Here"/>

                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={itemSeparator}
                    renderItem={({item}) =>
                        <Text
                            style={styles.row} onPress={() => {
                            props.onChange(item.offset);
                            Alert.alert('Selected TimeZone : ' + item.value);
                            reset();
                            setModalVisible(false);
                        }}>
                            {item.value}
                        </Text>}
                    style={styles.flatListItem}/>
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
    container: {
        marginTop: 20,
        textAlign: 'center',
    },
    flatListItem: {
        marginTop: 10
    },
    itemSeparator: {
        // backgroundColor: '#000',
        height: .5,
        width: '100%',
    },
    row: {
        fontSize: 18,
        padding: 12,
    }
});
CustomSearchFlatList.propTypes = {
    onChange: PropTypes.func,
    text: PropTypes.string
}