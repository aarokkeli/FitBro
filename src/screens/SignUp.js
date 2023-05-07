import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../config/styles';


export default function SignUpScreen({ navigation }) {
    const [value, setValue] = useState({
        email: '',
        password: '',
        error: '',
    })

    async function signUp() {
        if (value.email === "" || value.password === "") {
            setValue({
                ...value,
                error: 'Please enter email and password'
            })
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, value.email, value.password);
            navigation.navigate("Log in");
            Alert.alert("User created succesfully!")
        } catch (error) {
            setValue({
                ...value,
                error: error.message,
            })
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
                secureTextEntry={true}
                value={value.password}
                onChangeText={(text) => setValue({ ...value, password: text })}
                style={styles.input2}
            />
            <TouchableOpacity style={styles.button} onPress={signUp}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}