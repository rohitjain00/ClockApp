import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import PropTypes from 'prop-types';

export function HighLowButton(props) {
  function increase() {
    props.onChange(props.value + 2);
  }
  function decrease() {
    props.onChange(props.value - 2);
  }
  return (
    <View style={styles.container}>
      <Text>{props.text}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title='&uarr;'
          style={styles.button}
          onPress={() => {
            increase();
          }}/>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title='&darr;'
          style={styles.button} onPress={() => {
            decrease();
          }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
  },
  container: {
    margin: 20,
  },
});

HighLowButton.propTypes = {
  onChange: PropTypes.func,
  text: PropTypes.string,
  value: PropTypes.value
}
