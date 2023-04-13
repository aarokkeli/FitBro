import { getAuth, signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { React } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';


export default function Diet() {

    const user = auth.currentUser;

    return (
        <View style={styles.container}>
            <Text>
                Diet content
            </Text>
            {user ? (
                <>
                    <Text>Hi, {user.email}</Text>
                </>
            ) : (
                <Text></Text>
            )}
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