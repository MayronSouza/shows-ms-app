import React from 'react';
import { View, StyleSheet, TouchableOpacity } from "react-native"
import Feather from 'react-native-vector-icons/Feather'

const TabBar = ({ navigation, state }) => {
  return (
    <View style={styles.tab}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Feather
          name="home"
          size={32}
          color={state.index === 0 ? "white" : "black"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Shows')}>
        <Feather
          name="list"
          size={32}
          color={state.index === 1 ? "white" : "black"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('NewShow')}>
        <Feather
          name="plus-circle"
          size={32}
          color={state.index === 2 ? "white" : "black"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    padding: 10,
    backgroundColor: '#f99000'
  }
});

export { TabBar };