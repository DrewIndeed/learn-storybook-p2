import React from 'react';
import {StyleSheet, TextInput as RNTextInput, View} from 'react-native';
import colors from '../../config/colors';
import FieldWrapper from './FieldWrapper';

const styles = StyleSheet.create({
  border: {
    height: 1,
    backgroundColor: colors.border,
  },
  textInput: {
    fontSize: 14,
    fontWeight: '500',
    paddingBottom: 10,
  },
});

export default function TextInput({label, message, messageType, ...rest}) {
  return (
    <FieldWrapper label={label} message={message} messageType={messageType}>
      <RNTextInput style={styles.textInput} {...rest} />
      <View style={styles.border} />
    </FieldWrapper>
  );
}
