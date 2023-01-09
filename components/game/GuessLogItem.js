import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default function GuessLogItem({roundNUmber, guess}){
    return (
        <View style={styles.listItem}>
            <Text>#{roundNUmber}</Text>
            <Text>Opponent's Guess: {guess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem:{
        borderBottomColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '100%',
        elevation: 5,
        // ios shaddow setting
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,

    }
})