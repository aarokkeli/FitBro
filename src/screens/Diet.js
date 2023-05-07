import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../config/styles';
import { API_KEY_2, API_HOST } from '@env';

export default function Diet() {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [foodList, setFoodList] = useState([]);
    const [totals, setTotals] = useState({
        fat: 0,
        calories: 0
    });

    const searchApi = async () => {
        console.log('Searching API...');
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY_2,
                'X-RapidAPI-Host': API_HOST
            }
        };

        try {
            const response = await fetch(`https://nutritionix-api.p.rapidapi.com/v1_1/search/${searchText}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat`, options);
            const data = await response.json();
            setSearchResults(data.hits);
        } catch (error) {
            console.error(error);
        }
    };

    const handleAddFood = (food) => {
        const newFoodList = [...foodList, food];
        setFoodList(newFoodList);

        const newTotals = {
            fat: totals.fat + food.fields.nf_total_fat,
            calories: totals.calories + food.fields.nf_calories
        };
        setTotals(newTotals);
    };

    const renderSearchResults = ({ item }) => {
        const handlePress = () => {
            handleAddFood(item);
        };

    const handleRemove = (food) => {
        const foodCalories = item.fields.nf_calories;
        const foodFat = item.fields.nf_total_fat;

        const newTotals = {
            calories: totals.calories - foodCalories,
            fat: totals.fat - foodFat,
        };
        setTotals(newTotals);

        const newFoodList = [...foodList, food];
        setFoodList(newFoodList);
    };

        return (
            <TouchableOpacity style={styles.result} onPress={handlePress}>
                <Text style={styles.resultText}>{item.fields.item_name}</Text>
                <Text style={styles.resultText}>{`${item.fields.nf_calories} cal`}</Text>
                <Ionicons
                    name="trash-outline"
                    size={24}
                    color="black"
                    onPress={handleRemove}
                />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Search Foods</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder="Enter a food name"
                onChangeText={(text) => setSearchText(text)}
                value={searchText}
            />
            <TouchableOpacity style={styles.searchButton2} onPress={searchApi}>
                <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
            {searchResults && searchResults.length > 0 && (
                <FlatList
                    style={styles.searchResults}
                    data={searchResults}
                    renderItem={renderSearchResults}
                    keyExtractor={(item) => item.fields.item_id}
                />
            )}
            <View style={styles.totals}>
                <View style={styles.totalsRow}>
                    <Text style={styles.totalsLabel}>Fat:</Text>
                    <Text style={styles.totalsValue}>{`${totals.fat.toFixed(1)}g`}</Text>
                </View>
                <View style={styles.totalsRow}>
                    <Text style={styles.totalsLabel}>Calories:</Text>
                    <Text style={styles.totalsValue}>{`${totals.calories.toFixed(0)} cal`}</Text>
                </View>
            </View>
        </View>
    );
}