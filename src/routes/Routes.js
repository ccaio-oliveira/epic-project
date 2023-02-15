import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../components/Home/Home';

const Drawer = createDrawerNavigator();

export default () => {
    const drawerOptions = {
        headerShown: false,
        drawerPosition: 'right',
        drawerStyle: {
            backgroundColor: '#121212',
        },
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#FFF'
    }
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={drawerOptions} initialRouteName="Home">
                <Drawer.Screen name="Store" component={Home} />
                <Drawer.Screen name="Perguntas Frequentes" component={Home} />
                <Drawer.Screen name="Ajudas" component={Home} />
                <Drawer.Screen name="Unreal Engine" component={Home} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}