import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MessagesScreen from '../Chats/MessageScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();





const AppStack = () => {
    const getTabBarVisibility = (route) => {
        const routeName = route.state
            ? route.state.routes[route.state.index].name
            : '';

        if (routeName === 'chat') {
            return false;
        }
        return true;
    };

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#2e64e5',
            }}>
            <Tab.Screen
                name="MessageScreen"
                component={MessagesScreen}
                options={({ route }) => ({
                    tabBarVisible: getTabBarVisibility(route),
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="chatbox-ellipses-outline"
                            color={color}
                            size={size}
                        />
                    ),
                })}
            />
        </Tab.Navigator>
    );
};

export default AppStack;