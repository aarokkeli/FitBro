import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import Diary from '../screens/Diary';
import Diet from '../screens/Diet';
import Progress from '../screens/Progress';

const Tab = createBottomTabNavigator();

export default function UserStack() {
    return (
        <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Diary') {
              iconName = focused
                ? 'journal'
                : 'journal-outline';
            } else if (route.name === 'Diet') {
              iconName = focused ? 'fast-food' : 'fast-food-outline';
            } else if (route.name === 'Progress') {
              iconName = focused ? 'ios-bar-chart' : 'ios-bar-chart-outline';
            }
  
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#05968f',
          tabBarInactiveTintColor: 'gray',
        })}>
          <Tab.Screen name="Diary" component={Diary} options={{ headerShown: true, headerTitleAlign: 'left' }} />
          <Tab.Screen name="Diet" component={Diet} options={{ headerShown: true, headerTitleAlign: 'left' }} />
          <Tab.Screen name="Progress" component={Progress} options={{ headerShown: true, headerTitleAlign: 'left' }} />
        </Tab.Navigator>
      </NavigationContainer>
    )
}