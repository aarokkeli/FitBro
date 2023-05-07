import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styles from '../config/styles';

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
                style={styles.input2}
            />
            <TextInput
                placeholder="Password"
                autoCapitalize="none"
                value={value.password}
                onChangeText={(text) => setValue({ ...value, password: text })}
                secureTextEntry={true}
                style={styles.input2}
            />
            <TouchableOpacity style={styles.button2} onPress={logIn}>
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            {value.error !== "" && (
                <Text style={styles.errorText2}>{value.error}</Text>
            )}
        </View>
    );
}