import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import Diary from '../screens/Diary';
import Diet from '../screens/Diet';
import Progress from '../screens/Progress';
import Profile from '../screens/Profile';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{
            title: 'FitBro',
            headerRight: () => <ProfileButton />,
          }}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function ProfileButton() {
  const navigation = useNavigation();

  return (
    <Ionicons.Button
      name="person-circle-outline"
      onPress={() => navigation.navigate('Profile')}
      backgroundColor="transparent"
      color="#05968f"
    />
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Diary') {
            iconName = focused ? 'journal' : 'journal-outline';
          } else if (route.name === 'Diet') {
            iconName = focused ? 'fast-food' : 'fast-food-outline';
          } else if (route.name === 'Progress') {
            iconName = focused ? 'ios-bar-chart' : 'ios-bar-chart-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#05968f',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        headerTitleAlign: 'center',
      })}
    >
      <Tab.Screen name="Diary" component={Diary} />
      <Tab.Screen name="Diet" component={Diet} />
      <Tab.Screen name="Progress" component={Progress} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}
