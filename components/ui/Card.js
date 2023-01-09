import { StyleSheet, View } from "react-native"

import Colors from "../../constants/Colors"

export default function Card({children, style}){
    return (
        <View style={[styles.inputcontainer, style]}>{children}</View>
    )
};

const styles = StyleSheet.create({
    inputcontainer:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        // android shadow setting
        elevation: 4,
        // ios shaddow setting
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
})