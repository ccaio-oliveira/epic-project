import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native"
import { useNavigation } from '@react-navigation/native';
import NavigationBar from "../navigationBar/NavigationBar";
import { FontAwesome } from '@expo/vector-icons';
import { useState } from "react";

export default () => {
    const [searchGame, setSearchGame] = useState();
    const [ifClickSearch, setIfClickSearch] = useState(false);
    const [colorSearchIcon, setColorSearchIcon] = useState('#fff');
    const navigation = useNavigation();

    const searchInpOpen = () => {
        setIfClickSearch(true);
        setColorSearchIcon('#000');
    }

    const searchInpClose = () => {
        setIfClickSearch(false);
        setColorSearchIcon('#fff');
    }

    return (
        <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
            <View>
                <NavigationBar />
                <View style={styles.searchBar}>
                    <View style={styles.searchInpView}>
                        <FontAwesome name="search" size={24} color={colorSearchIcon} onPress={() => searchInpOpen()} style={styles.searchIcon} />
                        {ifClickSearch && (
                            <TextInput value={searchGame} placeholder="Pesquisar loja" style={styles.searchInput} />
                        )}
                        {ifClickSearch && (
                            <FontAwesome name="close" size={24} color="black" style={styles.searchIconClose} onPress={() => searchInpClose()} />
                        )}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
    },
    searchBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        position: "relative"
    },
    searchInpView: {
        flexDirection: "row",
        padding: 10
    },
    searchIcon: {
        position: "absolute",
        left: 15,
        top: 15,
        zIndex: 3
    },
    searchInput: {
        backgroundColor: "#FCFCFC",
        width: "90%",
        padding: 5,
        borderRadius: 10,
        paddingHorizontal: 35
    },
    searchIconClose: {
        position: "relative",
        right: 30,
        top: 5,
        zIndex: 3
    }
})