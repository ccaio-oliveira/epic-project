import { Image, Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons'; 

export default () => {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Image style={styles.logoImg} source={require('../../../assets/epic-games-logo.png')} />
            <Feather name="menu" size={24} color="white" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0,
    },
    logoImg: {
        width: 50,
        height: 50,
        marginTop: 10
    }
})