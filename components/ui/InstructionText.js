import { StyleSheet, Text } from "react-native"

export default function InstructionText({children, style}){
    return <Text style={[styles.textColour, style]}>{children}</Text>
};

const styles = StyleSheet.create({
    textColour: {
        color: Colors.accent500,
        fontSize: 20
    }
});