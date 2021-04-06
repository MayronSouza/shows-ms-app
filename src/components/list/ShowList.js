import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AppContext } from '../../context/AppContext';
import { useShows } from '../../hooks/useShows';

const ShowList = () => {
  const { shows } = useShows();
  const { dispatch } = useContext(AppContext);

  const handleSelectedItem = (id) => {
    dispatch({
      type: 'setSelectedItem',
      payload: id,
    });
  }

  return (
    <FlatList
      style={styles.container}
      data={shows}
      keyExtractor={(item) => item.id}
      renderItem={
        ({ item }) => (
          <TouchableOpacity onPress={() => handleSelectedItem(item.id)} style={styles.buttonTouch}>
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
    margin: 4,
    padding: 3,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderTopColor: '#f99000',
    borderBottomColor: '#f99000',
    backgroundColor: '#000'
  },
  text: {
    padding: 2,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#f99000',
  }
});

export { ShowList };