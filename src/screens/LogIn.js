import React, { useState } from 'react';
import { Alert, View, TextInput, Button, StyleSheet } from 'react-native';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LogInScreen({ navigation }) {
    const [value, setValue] = useState({
        email: "",
        password: "",
        error: "",
    });

    async function logIn() {
        if (value.email === "" || value.password === "") {
            setValue({
                ...value,
                error: "Please enter email and password",
            });
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, value.email, value.password);
        } catch (error) {
            setValue({
                ...value,
                error: error.message,
            });
        }
    }

    return (
        <View style={styles.outer}>
            <TextInput
                placeholder="Email"
                autoCapitalize="none"
                value={value.email}
                onChangeText={(text) => setValue({ ...value, email: text })}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                autoCapitalize="none"
                value={value.password}
                onChangeText={(text) => setValue({ ...value, password: text })}
                secureTextEntry={true}
                style={styles.input}
            />
            <Button title="Log in" onPress={logIn} />
        </View>
    );
}

const styles = StyleSheet.create({
    outer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
    },
});