import { React } from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function Diet() {


    return (
        <View style={styles.container}>
            <Text>
                Diary content
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});