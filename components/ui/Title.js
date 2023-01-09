import { Text, StyleSheet } from "react-native"
import Colors from "../../constants/Colors";

export default function Title({children}){
    return <Text style={styles.title}>{children}</Text>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        // borderWidth: 2,
        // borderColor: '#ddb52f',
        padding: 12,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 8,
        width: '88%'
    }
});