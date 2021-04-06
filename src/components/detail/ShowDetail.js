import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppContext } from '../../context/AppContext';

const ShowDetail = () => {
  const { state } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{state.selectedItem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export { ShowDetail };