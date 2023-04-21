import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import React, { useState } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


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
            Alert.alert("Käyttäjän luominen onnistui!")
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
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={true}
                value={value.password}
                onChangeText={(text) => setValue({ ...value, password: text })}
                style={styles.input}
            />
            <Button title="Register" onPress={signUp} />
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
        width: '80%',
    },
});