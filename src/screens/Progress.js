import React, { useState } from 'react';
import { Text, View, Button, Image, Modal, TouchableWithoutFeedback, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { getDatabase, ref, push } from 'firebase/database';
import { auth } from '../config/firebase';
import * as ImagePicker from 'expo-image-picker';
import styles from '../config/styles';

export default function Progress() {
    const [weekList, setWeekList] = useState([]);
    const [selectedWeek, setSelectedWeek] = useState(null);
    const [images, setImages] = useState({});
    const [isImageModalVisible, setIsImageModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [newWeekName, setNewWeekName] = useState('');

    const chooseImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
        });

        if (!result.canceled) {
            const selectedAsset = result.assets[0];
            setImages({
                ...images,
                [selectedWeek]: {
                    uri: selectedAsset.uri,
                },
            });
        }
    };

    const handleImagePress = (image) => {
        console.log(image);
        setSelectedImage(image);
        setIsImageModalVisible(true);
    };

    const handleCloseImageModal = () => {
        setIsImageModalVisible(false);
        setSelectedImage(null);
        setImages({ ...images });
    };

    const handleAddWeek = () => {
        if (newWeekName !== '') {
            const newWeek = { label: newWeekName, value: newWeekName.toLowerCase() };

            const db = getDatabase();
            const currentUser = auth.currentUser;

            const weekRef = ref(db, `users/${currentUser.uid}/weeks`);
            push(weekRef, newWeek).then((snapshot) => {
                const newWeekKey = snapshot.key;
                setWeekList([...weekList, { key: newWeekKey, ...newWeek }]);
                setSelectedWeek(newWeekKey);
                setNewWeekName('');
            }).catch((error) => {
                console.error('Error adding new week:', error);
            });
        }
    };

    return (
        <View style={styles.container5}>
            <View style={styles.footer}>
                <TextInput
                    style={styles.input3}
                    value={newWeekName}
                    onChangeText={(text) => setNewWeekName(text)}
                    placeholder="Enter a new week name"
                />
                <Button title="Add Week" onPress={handleAddWeek} disabled={newWeekName === ''} />
            </View>
            <View style={styles.header2}>
                <Picker
                    selectedValue={selectedWeek}
                    onValueChange={(value) => setSelectedWeek(value)}
                    style={styles.picker}
                >
                    {weekList.map((option) => (
                        <Picker.Item key={option.value} label={option.label} value={option.value} />
                    ))}
                </Picker>
            </View>
            <View style={styles.body}>
                {selectedWeek && images[selectedWeek] && (
                    <>
                        <TouchableOpacity onPress={() => handleImagePress(images[selectedWeek])}>
                            <Image source={{ uri: images[selectedWeek].uri }} style={styles.image} />
                        </TouchableOpacity>
                    </>
                )}
                <TouchableOpacity style={styles.searchButton} onPress={chooseImage} disabled={!selectedWeek}>
                    <Text style={styles.searchButtonText}>Choose image</Text>
                </TouchableOpacity>
            </View>
            <Modal visible={isImageModalVisible} animationType="slide">
                <View style={styles.modalContainer2}>
                    <TouchableWithoutFeedback onPress={handleCloseImageModal}>
                        <Image source={{ uri: selectedImage?.uri }} style={styles.modalImage} resizeMode='contain' />
                    </TouchableWithoutFeedback>
                </View>
            </Modal>
        </View>
    );
}
