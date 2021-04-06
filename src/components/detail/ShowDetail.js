import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AppContext } from '../../context/AppContext';

const ShowDetail = () => {
  const { state } = useContext(AppContext);

  return (
    <View>
      <Text>{state.selectedItem}</Text>
    </View>
  );
}

export { ShowDetail };