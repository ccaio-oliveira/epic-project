import { Image, StyleSheet, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default () => {
    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/epic-games-logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212'
    }
})