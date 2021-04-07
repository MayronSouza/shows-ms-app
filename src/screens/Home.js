import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Séries Inc.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212121',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#f99000',
  }
});

export { Home };