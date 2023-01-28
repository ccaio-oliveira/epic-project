import { Image, Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons'; 

export default () => {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Image style={styles.logoImg} source={require('../../../assets/epic-games-logo.png')} onPress={() => navigation.navigate('Home')} />
            <View style={styles.backMenu}>
                <Feather name="menu" size={40} color="white" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#202020',
        paddingLeft: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0,
    },
    logoImg: {
        width: 40,
        height: 40,
        marginVertical: 10,
    },
    backMenu: {
        backgroundColor: '#0078F2',
        height: 59,
        width: 59,
        justifyContent: "center",
        alignItems: "center",
        padding: 5
    }
})