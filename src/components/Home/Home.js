import { Text, View, StyleSheet } from "react-native"
import { useNavigation } from '@react-navigation/native';
import NavigationBar from "../navigationBar/NavigationBar";

export default () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <NavigationBar />
            <Text style={{ color: '#fff'}}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1
    }
})