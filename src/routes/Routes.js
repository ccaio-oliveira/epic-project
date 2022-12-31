import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Store from "../components/Store/Store";
import Home from '../components/Home/Home';

const Drawer = createDrawerNavigator();

export default () => {
    const drawerOptions = {
        headerShown: false,
        drawerPosition: 'right',
        drawerStyle: {
            backgroundColor: '#121212'
        },
        drawerActiveTintColor: '#fff',
    }
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={drawerOptions} initialRouteName="Home">
                <Drawer.Screen name="Store" component={Home} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}