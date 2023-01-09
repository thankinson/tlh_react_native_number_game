import { Image, View, StyleSheet, Text } from "react-native"

import Colors from "../constants/Colors"
import Title from "../components/ui/Title"
import PrimaryButton from "../components/ui/PrimaryButton"

export default function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    return (
        <View style={styles.screen}>
            <Title>GAME OVER!!!!!!</Title>
            <View style={styles.imageConatiner} >
                <Image style={styles.imageSize} source={require('../assets/images/success.png')} />
            </View>
           <View>
                <Text style={styles.textColor}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> Attempts. </Text>
                <Text style={styles.textColor}>To gues the number <Text style={styles.highlight}>{userNumber}</Text>.</Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
           </View>
        </View>
    ) 
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageConatiner:{
        // marginTop: 20,
        margin: 36,
        borderRadius: 200,
        width: 300,
        height: 300,
        borderWidth: 4,
        borderColor: Colors.primary800,
        elevation: 10,
        overflow: 'hidden'
    },
    imageSize:{
        width: '100%',
        height: '100%'
    },
    textColor: {
        fontSize: 15,
        color: 'white',
       marginVertical: 10
    },
    highlight: {
        fontWeight: 'bold'
    }
})