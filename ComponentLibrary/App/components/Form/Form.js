import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    marignHorizontal: 20,
    flex: 1,
  },
  headerText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 32,
    marginBottom: 12,
  },
  topRow: {
    marginBottom: 28,
  },
  subHeaderText: {
    color: colors.gray,
    fontSize: 20,
    marginBottom: 12,
  },
});

export default function Form({children, header, subheader}) {
  return (
    <View style={styles.container}>
      {(header || subheader) && (
        <View style={styles.topRow}>
          {header && <Text style={styles.headerText}>{header}</Text>}
          {subheader && <Text style={styles.subHeaderText}>{subheader}</Text>}
        </View>
      )}
      {children}
    </View>
  );
}
