import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { auth } from '../config/firebase';
import { reauthenticateWithCredential, EmailAuthProvider, updatePassword } from 'firebase/auth';
import styles from '../config/styles';

export default function ProfileScreen() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const user = auth.currentUser;

    const handlePress = async () => {
        try {
            const credential = EmailAuthProvider.credential(
                user.email,
                currentPassword
            );
            await reauthenticateWithCredential(user, credential);
            await updatePassword(user, newPassword);
            Alert.alert('Password changed successfully');
            setCurrentPassword('');
            setNewPassword('');
            setConfirmNewPassword('');
        } catch (e) {
            Alert.alert('Check the spelling!')
            console.log(e);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Hi! {user.email}</Text>
            <View style={styles.outer}>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Current Password"
                    value={currentPassword}
                    onChangeText={setCurrentPassword}
                />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="New Password"
                    value={newPassword}
                    onChangeText={setNewPassword}
                />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Confirm New Password"
                    value={confirmNewPassword}
                    onChangeText={setConfirmNewPassword}
                />
                <Pressable style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}>Update Password</Text>
                </Pressable>
            </View>
        </View>
    );
}
