import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList, Image } from 'react-native';
import { API_KEY_2 } from '@env'

export default function Search() {
    const [searchText, setSearchText] = useState('');
    const [exerciseList, setExerciseList] = useState([]);
    const [error, setError] = useState('');

    const searchExercises = async () => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': API_KEY_2,
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                }
            };

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
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                autoCapitalize="none"
                placeholder="Search exercises by bodypart"
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
            />
            <Button title="Search" onPress={searchExercises} />
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 50,
    },
    heading: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    searchInput: {
        height: 40,
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    exerciseList: {
        width: '100%',
        paddingHorizontal: 20,
    },
    exerciseItem: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginBottom: 10,
    },
    exerciseName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    exerciseDescription: {
        fontSize: 16,
        marginBottom: 5,
    },
    exerciseGif: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
    errorText: {
        color: 'red',
        marginVertical: 10,
    },
});
