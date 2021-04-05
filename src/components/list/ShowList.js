import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { showApi } from '../../api/show';

const ShowList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    showApi.get('/shows').then(response => {
      setList(response.data);
    });
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={list}
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