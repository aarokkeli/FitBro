import React from 'react';
import { View, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
    return (
        <View>
            <Button
                title="Log in"
                onPress={() => navigation.navigate('Log in')}
            />
            <Button
                title="New here? Register"
                onPress={() => navigation.navigate('Sign up')}
            />
        </View>
    );
}