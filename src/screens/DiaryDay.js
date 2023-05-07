import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getDatabase, ref, push, onValue, remove } from '@firebase/database';
import { auth } from '../config/firebase';
import styles from '../config/styles';

export default function DiaryDay({ route }) {
    const { day } = route.params;
    const [exercises, setExercises] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [exerciseName, setExerciseName] = useState('');
    const [weight, setWeight] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');

    useEffect(() => {
        const db = getDatabase();
        const currentUser = auth.currentUser;
        const exercisesRef = ref(db, `users/${currentUser.uid}/workoutdays/${day}/exercises`);
        onValue(exercisesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const exercisesArray = Object.entries(data).map(([key, value]) => {
                    return { ...value, key };
                });
                setExercises(exercisesArray);
            }
        });
    }, [day]);

    const handleAddExercise = () => {
        const db = getDatabase();
        const currentUser = auth.currentUser;
        const exercisesRef = ref(db, `users/${currentUser.uid}/workoutdays/${day}/exercises`);
        const newExerciseRef = {
            exerciseName: exerciseName,
            weight: weight,
            sets: sets,
            reps: reps
        }
        push(exercisesRef, newExerciseRef);
        setExerciseName("");
        setWeight("");
        setSets("");
        setReps("");
        setModalVisible(false);
    };

    const onDeleteExercise = (key) => {
        const db = getDatabase();
        const currentUser = auth.currentUser;
        const exercisesRef = ref(db, `users/${currentUser.uid}/workoutdays/${day}/exercises/${key}`);
        remove(exercisesRef);
      };

    return (
        <View style={styles.container2}>
            <Text>Day: {day}</Text>
            {exercises.map((exercise, index) => (
                <View key={index} style={styles.exerciseContainer}>
                    <Text style={styles.exerciseText}>{exercise.exerciseName}</Text>
                    <Text style={styles.exerciseText}>{exercise.weight} kgs</Text>
                    <Text style={styles.exerciseText}>{exercise.sets} sets</Text>
                    <Text style={styles.exerciseText}>{exercise.reps} reps</Text>
                    <TouchableOpacity onPress={() => onDeleteExercise(exercise.key)}>
                        <Ionicons name="trash-outline" size={24} color="darkred" />
                    </TouchableOpacity>
                </View>
            ))}
            <View style={styles.addExerciseButtonContainer}>
                <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.addButtonText}>Add exercise</Text>
                </TouchableOpacity>
            </View>
            <Modal visible={modalVisible} animationType="slide">
                <View style={styles.modalContainer}>
                    <Text style={styles.modalHeaderText}>Add Exercise</Text>
                    <TextInput
                        style={styles.modalInput}
                        placeholder="Exercise name"
                        value={exerciseName}
                        onChangeText={setExerciseName}
                    />
                    <TextInput
                        style={styles.modalInput}
                        placeholder="Weight (kgs)"
                        value={weight}
                        onChangeText={setWeight}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.modalInput}
                        placeholder="Sets"
                        value={sets}
                        onChangeText={setSets}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.modalInput}
                        placeholder="Reps"
                        value={reps}
                        onChangeText={setReps}
                        keyboardType="numeric"
                    />
                    <View style={styles.modalButtonContainer}>
                        <TouchableOpacity style={styles.modalButton} onPress={handleAddExercise}>
                            <Text style={styles.modalButtonText}>Add Exercise</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.modalButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}