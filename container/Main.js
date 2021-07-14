import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chats from '../screens/Chats';
import ChatScreen from '../screens/Chats/ChatScreen';
import Status from '../screens/Status';
import Calls from '../screens/Calls';
import CameraScreen from '../screens/CameraScreen/CameraScreen';
import React from 'react';
import {
    SafeAreaView,
    Image,
    TouchableOpacity,
    View,
    StyleSheet,
    StatusBar
} from 'react-native';


const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const MaterialTopTab = () => {
    return (
        <Tab.Navigator
        initialRouteName='chats'
            tabBarOptions={{
                indicatorStyle: {
                    backgroundColor: 'white'
                },
                labelStyle: { fontSize: 16, fontWeight: 'bold' },
                style: { backgroundColor: '#128C7E' },
                activeTintColor: 'white'
            }}
        >
            <Tab.Screen name="camera" options={{
                tabBarLabel:()=>(
                    <View>
                        <Image
                        source={require('../assests/images/camera.png')}
                        style={{width:26,height:26}}
                        />
                    </View>
                )
            }} component={CameraScreen} />
            <Tab.Screen name="chats" component={Chats} />
            
            <Tab.Screen name="status" component={Status} />
            <Tab.Screen name="calls" component={Calls} />
        </Tab.Navigator>
    );
};
export default class Main extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar style="light"
                backgroundColor = {'#075E54'}
                />
            <NavigationContainer>
                <Stack.Navigator initialRouteName="home">
                    <Stack.Screen
                        options={({ navigation, route }) => ({
                            title: 'Whatsapp',
                            headerTintColor: 'white',
                            headerStyle: {
                                elevation: 0,
                                backgroundColor: '#128C7E',
                            },
                            headerRight: () => {
                                return (
                                    <View style={{ flexDirection: 'row', flex: 0.5 }}>
                                        <TouchableOpacity onPress={() => console.warn('search')} style={{ marginHorizontal: 5 }}>
                                            <Image
                                                source={require('../assests/images/search.png')}
                                                style={{ width: 20, height: 20 }}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => console.warn('menu clicked')} style={{ marginHorizontal: 5 }}>
                                            <Image
                                                source={require('../assests/images/dot.png')}
                                                style={{ width: 20, height: 20 }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                )
                            }
                        })}
                        name="home"
                        component={MaterialTopTab} />
                         <Stack.Screen 
                name="ChatScreen"
                component={ChatScreen}
                options={({ route }) => ({
                    title: route.params.name,
                    headerBackTitleVisible: false,
                })}
               
                />
                </Stack.Navigator>
            </NavigationContainer>
            
            </View>
        );
    }
}
const main = () => {
    const getTabBarVisibility = (route) => {
        const routeName = route.state
            ? route.state.routes[route.state.index].name
            : '';

        if (routeName === 'chat') {
            return false;
        }
        return true;
    }
}
