import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry, StyleSheet } from 'react-native';
import React from 'react';
import { name as appName } from '../../app.json';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import HomeScreen from '../screens/HomeScreen';
import TeamDetailsScreen from '../screens/TeamDetailsScreen';
import AddTeamScreen from '../screens/AddTeamScreen';

const Stack = createStackNavigator();



export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TeamDetails" component={TeamDetailsScreen} />
      <Stack.Screen name="AddTeam" component={AddTeamScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

AppRegistry.registerComponent(appName, () => AppNavigator);
