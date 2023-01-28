import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';
import NavigationBar from "../navigationBar/NavigationBar";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

export default () => {
    // variáveis de estilo da parte de pesquisa
    const [searchView, setSearchView] = useState(false);
    const [styleSearchView, setStyleSearchView] = useState(styles.searchBar)
    // variáveis de estilo da parte do dropdown descobrir
    const [visDrop, setVisDrop] = useState(false);
    const [arrowDrop, setArrowDrop] = useState('down');
    const navigation = useNavigation();

    const visibilitySearch = () => {
        if (searchView === true) {
            setStyleSearchView(styles.searchBar);
            setSearchView(false);
        } else {
            setStyleSearchView(styles.searchVisBar);
            setSearchView(true);
        }
    }

    const visibilityDrop = () => {
        if (visDrop === true) {
            setVisDrop(false);
            setArrowDrop('up');
        } else {
            setVisDrop(true);
            setArrowDrop('down');
        }
    }

    return (
        <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
            <View>
                <NavigationBar />
                <View style={styleSearchView}>
                    <View style={styles.searchInpView}>
                        <FontAwesome name="search" size={24} color="#FFF" onPress={() => visibilitySearch()} style={styles.searchIcon} />
                        {searchView && (
                            <>
                                <TextInput placeholder="Pesquisar loja" placeholderTextColor="#FFF" style={styles.searchInput} />
                                <AntDesign name="close" size={24} color="#FFF" onPress={() => visibilitySearch()} />
                            </>

                        )}
                    </View>
                    {!searchView && (
                        <>
                            <View style={styles.discoverView}>
                                <TouchableOpacity style={styles.discDrop} onPress={() => visibilityDrop()}>
                                    <Text style={{ fontSize: 16, marginRight: 7, color: '#fff' }}>Descobrir</Text>
                                    <AntDesign name={arrowDrop} size={18} color="#FFF" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.wishCartView}>
                                <Text>Carrinho</Text>
                            </View>
                        </>
                    )}
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
        padding: 20,
        backgroundColor: '#000',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    searchVisBar: {
        backgroundColor: '#202020',
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    searchInpView: {
        flexDirection: "row"
    },
    searchInput: {
        marginLeft: 20,
        color: '#fff',
        width: '79%'
    },
    discDrop: {
        flexDirection: "row",
        alignItems: "center"
    }
})