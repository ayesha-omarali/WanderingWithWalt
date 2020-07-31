import { Ionicons } from '@expo/vector-icons';
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
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Discoveries"
        component={DiscoveriesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const WelcomeesStack = createStackNavigator<WelcomeParamList>();

function WelcomeNavigator() {
  return (
    <WelcomeesStack.Navigator>
      <WelcomeesStack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerTitle: `It's time to explore!` }}
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
