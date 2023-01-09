import { useState } from "react"
import { TextInput, View, StyleSheet, Alert } from "react-native"

import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton"
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

export default function StartGameScreen({onPickNumber}){
    const [enterdNumber, setEnterdnumber] = useState('');

    function numberinputHandler(enterdText){
        setEnterdnumber(enterdText);
    };

    function resetInputHandler(){
        setEnterdnumber('');
    };

    function confirmInputHandler(){
        const chosenNumber = parseInt(enterdNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ){
            Alert.alert(
                'Invalid number', 
                'Number has to be a number between 1 and 99', 
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            );
        };

        onPickNumber(chosenNumber);
    };

    return (
        <View style={styles.rootContainer} >
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a number</InstructionText>
                <TextInput 
                    style={styles.numberInput} 
                    maxLength={2} 
                    keyboardType='number-pad' 
                    autoCapitalize="none" 
                    autoCorrect={false} 
                    onChangeText={numberinputHandler}
                    value={enterdNumber}
                />
                <View style={styles.buttonsContainer} >
                    <View style={styles.buttonContainer} >
                        <PrimaryButton onPress={resetInputHandler} >Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer:{
        paddingVertical: 16,
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
});