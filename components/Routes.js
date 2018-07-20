import React from 'react';
import { Root } from 'native-base';
import {
  createDrawerNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';

import { StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import Timeline from './ui/Timeline';
import Discover from './ui/Discover';
import Maps from './ui/Maps';
import Profile from './ui/Profile';
import Notifications from './ui/Notifications';

import Settings from './ui/Settings';

import SideBar from './ui/SideBar';
import BottomNav from './ui/BottomNav';

const TimelineStack = createStackNavigator(
  {
    Timeline: { screen: Timeline }
  },
  {
    initialRouteName: 'Timeline',
    headerMode: 'none'
  }
);

const DiscoverStack = createStackNavigator(
  {
    Discover: { screen: Discover }
  },
  {
    initialRouteName: 'Discover',
    headerMode: 'none'
  }
);

const MapsStack = createStackNavigator(
  {
    Maps: { screen: Maps }
  },
  {
    initialRouteName: 'Maps',
    headerMode: 'none'
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: { screen: Profile }
  },
  {
    initialRouteName: 'Profile',
    headerMode: 'none'
  }
);

const NotificationsStack = createStackNavigator(
  {
    Notifications: { screen: Notifications }
  },
  {
    initialRouteName: 'Notifications',
    headerMode: 'none'
  }
);

const Tabs = createBottomTabNavigator(
  {
    Timeline: { screen: TimelineStack },
    Discover: { screen: DiscoverStack },
    Maps: { screen: MapsStack },
    Notifications: { screen: NotificationsStack }
  },
  {
    initialRouteName: 'Timeline',
    tabBarPosition: 'bottom',
    tabBarComponent: props => <BottomNav {...props} />
  }
);

const Drawer = createDrawerNavigator(
  {
    Tabs: { screen: Tabs },
    Settings: { screen: Settings },
    Profile: { screen: ProfileStack }
  },
  {
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer }
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none'
  }
);

export default class Routes extends React.Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Root>
          <AppNavigator />
        </Root>
      </StyleProvider>
    );
  }
}
