import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import WelcomeScreen from '../screens/TabOneScreen';
import DiscoveriesScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, WelcomeParamList as WelcomeParamList, DiscoveriesParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Welcome"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Welcome"
        component={WelcomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <WelcomeIcon name="smileo" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Discoveries"
        component={DiscoveriesNavigator}
        options={{
          tabBarIcon: ({ color }) => <DiscoveriesIcon name="ship-wheel" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function DiscoveriesIcon(props: { name: string; color: string }) {
  return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

function WelcomeIcon(props: { name: string; color: string }) {
  return <AntDesign size={25} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const WelcomeesStack = createStackNavigator<WelcomeParamList>();

function WelcomeNavigator() {
  return (
    <WelcomeesStack.Navigator   screenOptions={{
    headerShown: false
  }}>
      <WelcomeesStack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        // options={{ headerTitle: `It's time to explore!` }}
      />
    </WelcomeesStack.Navigator>
  );
}

const DiscoveriesStack = createStackNavigator<DiscoveriesParamList>();

function DiscoveriesNavigator() {
  return (
    <DiscoveriesStack.Navigator>
      <DiscoveriesStack.Screen
        name="DiscoveriesScreen"
        component={DiscoveriesScreen}
        options={{ headerTitle: 'Your Discoveries' }}
      />
    </DiscoveriesStack.Navigator>
  );
}
