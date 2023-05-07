import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { API_KEY_2, API_HOST_2 } from '@env'
import styles from '../config/styles';

export default function Search() {
    const [searchText, setSearchText] = useState('');
    const [exerciseList, setExerciseList] = useState([]);
    const [error, setError] = useState('');

    const searchExercises = async () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY_2,
                'X-RapidAPI-Host': API_HOST_2
            }
        };

        try {
            const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${searchText}`, options)
            const data = await response.json();
            setExerciseList(data);
            setError('');
        } catch (err) {
            setExerciseList([]);
            setError('Failed to fetch exercises. Please try again later.');
            console.error(err);
        }
    };

    const renderExercise = ({ item }) => {
        console.log(item);
        return (
            <View style={styles.exerciseItem}>
                <Text style={styles.exerciseName}>{item.name}</Text>
                <Text style={styles.exerciseDescription}>Targeted area: {item.target}</Text>
                <Image style={styles.exerciseGif} source={{ uri: item.gifUrl }} />
            </View>
        );
    };

    return (
        <View style={styles.container3}>
            <Text style={styles.heading}>Search exercises</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder="Search exercises by bodypart"
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
            />
            <TouchableOpacity style={styles.searchButton} onPress={searchExercises}>
                <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <FlatList
                data={exerciseList}
                renderItem={renderExercise}
                keyExtractor={(item) => item.id.toString()}
                style={styles.exerciseList}
            />
        </View>
    );
}
