import React from 'react';
import { View, StyleSheet } from 'react-native';

const Shows = () => {
  return (
    <View style={styles.parent}>
     <View style={styles.list}></View>
     <View style={styles.details}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  list: {
    flex: 2,
    backgroundColor: 'blue',
  },
  details: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export { Shows };