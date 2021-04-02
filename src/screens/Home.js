import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.mainView}>
      <Text>Hello World in the Home Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export { Home };