import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './screens/Home';
import { Shows } from './screens/Shows';
import { NewShow } from './screens/NewShow';
import { TabBar } from './components/TabBar';

const tabNav = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <tabNav.Navigator tabBar={props => <TabBar {...props} />}>
        <tabNav.Screen name={'Home'} component={Home} />
        <tabNav.Screen name={'Shows'} component={Shows} />
        <tabNav.Screen name={'NewShow'} component={NewShow} />
      </tabNav.Navigator>
    </NavigationContainer>
  );
}

export default App;