import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';
import NavigationBar from "../navigationBar/NavigationBar";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
import MainContent from "../MainContent/MainContent";
import Find from "../MainContent/Find/Find";
import Navegar from "../MainContent/Navegar/Navegar";
import Novidades from "../MainContent/Novidades/Novidades";

export default () => {
    // variáveis de estilo da parte de pesquisa
    const [searchView, setSearchView] = useState(false);
    const [styleSearchView, setStyleSearchView] = useState(styles.searchBar)
    // variáveis de estilo da parte do dropdown descobrir
    const [visDrop, setVisDrop] = useState(false);
    const [arrowDrop, setArrowDrop] = useState('down');
    // variaveis para configurar o conteudo principal
    const [titleMainContent, setTitleMainContent] = useState('Descobrir');
    const [colorDesc, setColorDesc] = useState('#8a8488');
    const [colorNav, setColorNav] = useState('#8a8488');
    const [colorNov, setColorNov] = useState('#8a8488');
    const [itemMainContent, setItemMainContent] = useState(<Find />);
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

    const changeMainContent = (atual) => {
        if (atual === 'Descobrir') {
            setItemMainContent(<Find />);
            setTitleMainContent('Descobrir');
            setColorDesc('#FFF');
            setColorNav('#8a8488');
            setColorNov('#8a8488');
        } else if (atual === 'Navegar') {
            setItemMainContent(<Navegar />);
            setTitleMainContent('Navegar');
            setColorNav('#FFF');
            setColorDesc('#8a8488');
            setColorNov('#8a8488');
        } else if (atual == 'Novidades') {
            setItemMainContent(<Novidades />);
            setTitleMainContent('Novidades');
            setColorNav('#8a8488');
            setColorDesc('#8a8488');
            setColorNov('#FFF');
        } else if (atual == 'Lista de desejos') {
            setItemMainContent(<Find />);
            setColorNav('#8a8488');
            setColorDesc('#8a8488');
            setColorNov('#8a8488');
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
                                    <Text style={{ fontSize: 16, marginRight: 7, color: '#fff' }}>{titleMainContent}</Text>
                                    <AntDesign name={arrowDrop} size={18} color="#FFF" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.wishCartView}>
                                <TouchableOpacity onPress={() => changeMainContent('Lista de desejos')}>
                                    <AntDesign name="checkcircleo" size={18} color="white" style={{marginRight: 20}} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <AntDesign name="shoppingcart" size={18} color="white" />
                                </TouchableOpacity>
                            </View>
                        </>
                    )}
                </View>
            </View>
            <View style={styles.mainContent}>
                {!visDrop && (
                    <View style={styles.dropContent}>
                        <TouchableOpacity style={{ paddingVertical: 15, borderBottomColor: '#8a8488', borderBottomWidth: 1 }} onPress={() => changeMainContent('Descobrir')}>
                            <Text style={{ color: colorDesc, fontSize: 18 }}>Descobrir</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingVertical: 15, borderBottomColor: '#8a8488', borderBottomWidth: 1 }} onPress={() => changeMainContent('Navegar')}>
                            <Text style={{ color: colorNav, fontSize: 18 }}>Navegar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingVertical: 15, paddingBottom: 30 }} onPress={() => changeMainContent('Novidades')}>
                            <Text style={{ color: colorNov, fontSize: 18 }}>Novidades</Text>
                        </TouchableOpacity>
                    </View>
                )}
                <MainContent element={itemMainContent} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        flex: 1,
    },
    mainContent: {
    },
    searchBar: {
        padding: 20,
        backgroundColor: '#121212',
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
    },
    dropContent: {
        zIndex: 10,
        backgroundColor: '#121212',
        paddingHorizontal: 20,
        paddingTop: 0,
    },
    wishCartView: {
        flexDirection: "row"
    }
})