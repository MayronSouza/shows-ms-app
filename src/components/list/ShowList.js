import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

const items = [
    {
      id: 1,
      name: 'Friends',
    },
    {
      id: 2,
      name: 'Heroes',
    },
    {
      id: 3,
      name: 'Two and half man',
    },
  ];
const ShowList = () => {
  return (
    <FlatList
      style={styles.container}
      data={items}
      renderItem={
        ({ item }) => (
          <TouchableOpacity onPress={() => console.log(item.id)} style={styles.buttonTouch}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  buttonTouch: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 8,
    padding: 5,
    borderRadius: 50,
    backgroundColor: '#f99000'
  },
  text: {
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  }
});

export { ShowList };