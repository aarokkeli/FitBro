import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles from '../config/styles';
import ProfileSettings from '../screens/ProfileSettings';

const Stack = createStackNavigator();

function Profile({ navigation }) {

    return (
        <View style={styles.container4}>
            <Text>Welcome to your profile!</Text>
            <Pressable onPress={() => navigation.navigate('ProfileSettings')}>
                <Image
                    style={styles.userImg}
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' }}
                />
            </Pressable>
            <Pressable style={styles.button} onPress={() => signOut(auth)}>
                <Text style={styles.buttonText}>Log out</Text>
            </Pressable>
        </View>
    );
}

export default function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfileScreen" component={Profile} options={{ headerShown: false, title: "Profile" }} />
            <Stack.Screen name="ProfileSettings" component={ProfileSettings} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}