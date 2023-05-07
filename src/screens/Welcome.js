import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../config/styles';

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.outer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Log in')}
            >
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Sign up')}
            >
                <Text style={styles.buttonText}>New here? Register</Text>
            </TouchableOpacity>
        </View>
    );
}