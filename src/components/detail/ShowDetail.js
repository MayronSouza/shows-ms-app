import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AppContext } from '../../context/AppContext';

const ShowDetail = () => {
  const { state } = useContext(AppContext);
  const {
    name,
    country,
    network,
    image_thumbnail_path,
   } = state.showList.filter(item => item.id === state.selectedItem)[0];

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image_thumbnail_path }}
        style={styles.picture}
        resizeMode={'contain'}
      />
      <Text style={styles.text}>Nome: {name}</Text>
      <Text style={styles.text}>Country: {country}</Text>
      <Text style={styles.text}>Network: {network}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f99000',
  },
  picture: {
    height: 250,
    width: 400,
  }
});

export { ShowDetail };