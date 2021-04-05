import React from 'react';
import { View, StyleSheet } from 'react-native';

import { ShowList } from '../components/list/ShowList';
import { ShowDetail } from '../components/detail/ShowDetail';

const Shows = () => {
  return (
    <View style={styles.parent}>
     <View style={styles.list}>
       <ShowList />
     </View>
     <View style={styles.details}>
       <ShowDetail />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  list: {
    flex: 2,
  },
  details: {
    flex: 1,
  },
});

export { Shows };