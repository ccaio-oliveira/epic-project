import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes/Routes';
import 'react-native-gesture-handler';

export default function App() {
    StatusBar.setBarStyle('#fff');

    return (
        <View style={styles.container}>
            <Routes />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
    },
});
