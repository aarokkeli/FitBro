import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { getDatabase, ref, onValue, push, remove } from '@firebase/database';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../config/firebase';
import DiaryDay from './DiaryDay';
import styles from '../config/styles';

const Stack = createStackNavigator();

export function Diary() {
    const [workoutDays, setWorkoutDays] = useState([]);
    const [newWorkoutDay, setNewWorkoutDay] = useState('');
    const [user, setUser] = useState({});
    const navigation = useNavigation();

    useEffect(() => {
        const db = getDatabase();
        const currentUser = auth.currentUser;
        const daysRef = ref(db, `users/${currentUser.uid}/workoutdays`);

        // Subscribe to changes in the workoutdays node
        onValue(daysRef, snapshot => {
            const workoutDays = snapshot.val() ? Object.keys(snapshot.val()) : [];
            setWorkoutDays(workoutDays);
        });

        const subscriber = auth.onAuthStateChanged((user) => {
            console.log('user', JSON.stringify(user));
            setUser(user);
        });
        return () => {
            // Unsubscribe from Firebase listeners when component unmounts
            setWorkoutDays([]);
            subscriber();
        };
    }, []);

    const handleAddWorkoutDay = () => {
        if (!newWorkoutDay) {
            Alert.alert('Input cannot be empty');
            return;
        }
        const db = getDatabase();
        const currentUser = auth.currentUser;
        const daysRef = ref(db, `users/${currentUser.uid}/workoutdays`);
        const newDay = { name: newWorkoutDay };
        push(daysRef, newDay);
        setNewWorkoutDay('');
    };

    const handleDeleteWorkoutDay = (day) => {
        const db = getDatabase();
        const currentUser = auth.currentUser;
        const dayRef = ref(db, `users/${currentUser.uid}/workoutdays/${day}`);
        remove(dayRef);
    };


    const handlePressDay = (day) => {
        console.log(day);
        navigation.navigate('DiaryDay', { day });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Workouts</Text>
            <View style={styles.workoutDaysContainer}>
                {workoutDays.map((day, index) => (
                    <View key={index} style={styles.dayContainer}>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => handlePressDay(day)}>
                            <Text style={styles.dayText}>{day}</Text>
                            <Ionicons name="trash-outline" size={24} color="darkred" style={styles.IoniconsButton} onPress={() => handleDeleteWorkoutDay(day)} />
                        </TouchableOpacity>
                    </View>

                ))}
            </View>
            <View style={styles.addWorkoutDayContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Name your day (Armday 1, Chestday 1 etc..)"
                    value={newWorkoutDay}
                    onChangeText={setNewWorkoutDay}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleAddWorkoutDay}>
                    <Text style={styles.addButtonText}>Add Workout Day</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default function DayStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="DiaryPage" component={Diary} options={{ headerShown: false, title: "Diary" }} />
            <Stack.Screen name="DiaryDay" component={DiaryDay} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}