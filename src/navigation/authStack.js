import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/Welcome';
import LogInScreen from '../screens/LogIn';
import SignUpScreen from '../screens/SignUp';

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Log in" component={LogInScreen} options={{ headerBackTitleVisible: false, headerTintColor: 'black' }} />
                <Stack.Screen name="Sign up" component={SignUpScreen} options={{ headerBackTitleVisible: false, headerTintColor: 'black' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}