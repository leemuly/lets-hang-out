import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ExploreScreen from '../screens/ExploreScreen';
import EventsScreen from '../screens/EventsScreen'
import PlansScreen from '../screens/PlansScreen'
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ExploreStack = createStackNavigator(
  {
    Explore: ExploreScreen,
  },
  config
);

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-planet${focused ? '' : '-outline'}`
          : 'md-planet'
      }
    />
  ),
};

ExploreStack.path = '';

const EventsStack = createStackNavigator(
  {
    Events: EventsScreen,
  },
  config
);


EventsStack.navigationOptions = {
  tabBarLabel: 'Events',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-list${focused ? '' : '-outline'}`
          : 'md-list'
      }
    />
  ),
};

EventsStack.path = '';

const PlansStack = createStackNavigator(
  {
    Plans: PlansScreen,
  },
  config
);

PlansStack.navigationOptions = {
  tabBarLabel: 'Plans',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'} />
  ),
};

PlansStack.path = '';

// const ProfileStack = createStackNavigator(
//   {
//     Profile: ProfileScreen,
//   },
//   config
// );

// ProfileStack.navigationOptions = {
//   tabBarLabel: 'Profile',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-happy' : 'md-happy'} />
//   ),
// };

// ProfileStack.path = '';

// const SettingsStack = createStackNavigator(
//   {
//     Settings: SettingsScreen,
//   },
//   config
// );

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
//   ),
// };

// SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  ExploreStack,
  EventsStack,
  PlansStack,
  // ProfileStack,
  // SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
