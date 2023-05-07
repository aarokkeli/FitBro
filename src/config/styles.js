import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({

    // Diary.js
    container: {
        flex: 1,
        backgroundColor: '#EAEAEA',
        justifyContent: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    header: {
        fontSize: 24,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    workoutDaysContainer: {
        marginBottom: 20,
    },
    dayContainer: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 10,
    },
    dayText: {
        fontSize: 16,
    },
    addWorkoutDayContainer: {
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%',
    },
    addButton: {
        backgroundColor: 'rgba(34,36,40,1)',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    IoniconsButton: {
        alignSelf: 'flex-end',
    },

    // DiaryDay.js
    container2: {
        flex: 1,
        backgroundColor: '#EAEAEA',
        padding: 20,
    },
    exerciseContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        minWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 5,
    },
    modalHeaderText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: '100%',
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    modalButton: {
        backgroundColor: 'rgba(34,36,40,1)',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        width: '40%',
    },
    modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cancelButton: {
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        width: '40%',
    },

    // Search.js
    container3: {
        flex: 1,
        backgroundColor: '#EAEAEA',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    searchButton: {
        backgroundColor: 'rgba(34,36,40,1)',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
    },
    exerciseList: {
        width: '100%',
        paddingHorizontal: 'auto',
    },
    exerciseItem: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
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

    // Diet.js
    searchButton2: {
        backgroundColor: '#rgba(34,36,40,1)',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
    },
    searchResults: {
        width: '100%',
        marginBottom: 20,
    },
    result: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    resultText: {
        fontSize: 16,
        marginBottom: 5,
    },
    totals: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        width: '100%',
    },
    totalsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    totalsLabel: {
        fontWeight: 'bold',
    },
    totalsValue: {},

    // Profile.js
    container4: {
        flex: 1,
        backgroundColor: '#EAEAEA',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userImg: {
        height: 150,
        width: 150,
        borderRadius: 75,
        marginTop: 20,
      },
      button: {
        backgroundColor: '#333',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    // LogIn.js
    outer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAEAEA',
    },
    input2: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
        width: '80%',
        backgroundColor: '#fff',
    },
    button2: {
        backgroundColor: '#333',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
    },
    errorText2: {
        color: 'red',
        marginTop: 5,
    },

    // Progress.js
    container5: {
        flex: 1,
        backgroundColor: '#EAEAEA',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 0,
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10,
    },
    input3: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 10,
        flex: 1,
        marginRight: 10,
    },
    picker: {
        flex: 1,
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    modalContainer2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    modalImage: {
        width: '100%',
        height: '100%',
    },
    searchButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },

    // Welcome.js

    // SignUp.js
    buttonContainer: {
        width: '80%',
        borderRadius: 4,
        overflow: 'hidden',
    },
});