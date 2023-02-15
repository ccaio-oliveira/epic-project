import { StyleSheet, Text, View } from "react-native"

export default ({element}) => {
    return(
        <View style={styles.container}>
            {element}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 30,
    }
})