import { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

export default () => {
    const width = Dimensions.get('window').width;
    const [data, setData] = useState([...new Array(6).keys()]);
    const imageSource = {
        0: {image: require('./image/Rocket-League.jpg'), title: 'Rocket League'},
        1: {image: require('./image/crime-boss.jpg'), title: 'Crime Boss'},
        2: {image: require('./image/Rocket-League.jpg'), title: 'Rocket League'},
        3: {image: require('./image/Rocket-League.jpg'), title: 'Rocket League'},
        4: {image: require('./image/Rocket-League.jpg'), title: 'Rocket League'},
        5: {image: require('./image/Rocket-League.jpg'), title: 'Rocket League'},
    };

    return(
        <View style={styles.container}>
            <Carousel 
                style={styles.carousel}
                vertical={false}
                loop={true}
                width={width * 0.85}
                height={width * 0.8}
                data={data}
                autoPlay={true}
                autoPlayInterval={1500}
                scrollAnimationDuration={1000}
                renderItem={({ index }) => (
                    <View style={{width: '90%'}}>
                        <Image style={{width: '100px'}} source={imageSource[index].image} />
                        <Text style={{color: '#fff'}}>{imageSource[1].title}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    carousel: {
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 20,
        width: '100%'
    }
})