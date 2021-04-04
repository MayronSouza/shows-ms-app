import React from 'react';
import { View, StyleSheet, TouchableOpacity } from "react-native"
import Feather from 'react-native-vector-icons/Feather'

const TabBar = ({ navigation }) => {
  return (
    <View style={styles.tab}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Feather name="home" size={32} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Shows')}>
        <Feather name="list" size={32} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('NewShow')}>
        <Feather name="plus-circle" size={32} color="white" />
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