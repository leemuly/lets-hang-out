import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CatalogScreen from '../screens/CatalogScreen'
import ShelfScreen from '../screens/ShelfScreen';
import CardScreen from '../screens/CardScreen'
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-gift${focused ? '' : '-outline'}`
          : 'md-gift'
      }
    />
  ),
};

HomeStack.path = '';

const CatalogStack = createStackNavigator(
  {
    Catalog: CatalogScreen,
  },
  config
);

CatalogStack.navigationOptions = {
  tabBarLabel: 'Catalog',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-barcode' : 'md-barcode'} />
  ),
};

CatalogStack.path = '';

const ShelfStack = createStackNavigator(
  {
    Shelf: ShelfScreen,
  },
  config
);

ShelfStack.navigationOptions = {
  tabBarLabel: 'Shelf',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-bookmarks' : 'md-bookmarks'} />
  ),
};

ShelfStack.path = '';

const CardStack = createStackNavigator(
  {
    Card: CardScreen,
  },
  config
);

CardStack.navigationOptions = {
  tabBarLabel: 'Quotes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-journal' : 'md-journal'} />
  ),
};

CardStack.path = '';


const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  CatalogStack,
  ShelfStack,
  CardStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
