import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';
import NavigationBar from "../navigationBar/NavigationBar";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

export default () => {
    const [visDrop, setVisDrop] = useState(false);
    const [arrowDrop, setArrowDrop] = useState('down');
    const navigation = useNavigation();

    const visibilityDrop = () => {
        if(visDrop === true){
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
                <View style={styles.searchBar}>
                    <View style={styles.searchInpView}>
                        <FontAwesome name="search" size={24} color="#000" onPress={() => searchInpOpen()} style={styles.searchIcon} />
                    </View>
                    <View style={styles.discoverView}>
                        <TouchableOpacity style={styles.discDrop} onPress={() => visibilityDrop()}>
                            <Text style={{ fontSize: 16, marginRight: 7 }}>Descobrir</Text>
                            <AntDesign name={arrowDrop} size={18} color="black" />
                        </TouchableOpacity>
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
        padding: 20,
        backgroundColor: '#fff',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    searchInpView: {
        borderColor: 'red',
        borderWidth: 1
    },
    discDrop: {
        flexDirection: "row",
        alignItems: "center"
    }
})