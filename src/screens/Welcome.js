import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.outer}>
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

const styles = StyleSheet.create({
    outer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});