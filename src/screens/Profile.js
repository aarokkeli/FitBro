import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Profile() {

    return (
        <View style={styles.container}>
            <Text>Welcome to your profile!</Text>
            <Pressable onPress={() => signOut(auth)}>
                <Text className="text-black text-x1">Log out</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});