import React from 'react'
import { View } from 'react-native';

//utilities
import palette from '../../utilities/colors';
import screenOptions from './stylesheet';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Home from '../Home';
import Info from '../Info';
import Config from '../Config';
import User from '../User';
import Welcome from '../welcome';

import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigate = () => {

    return (
        <Tab.Navigator {...{screenOptions}}>
            <Tab.Screen name='Home' component={Home} options={{
                tabBarIcon: ({focused}) => (  
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: focused ? palette.primary : palette.dark,
                        width: '95%',
                        height: 45,
                        borderRadius: 50
                    }}>
                        <Icon name="home" size={25} color={focused ? palette.dark : palette.primary}/>
                    </View>
                )
            }}/>
            <Tab.Screen name='Info' component={Info} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: focused ? palette.primary : palette.dark,
                        width: '95%',
                        height: 45,
                        borderRadius: 50
                    }}>
                        <Icon name="qr-code" size={25} color={focused ? palette.dark : palette.primary}/>
                    </View>
                )
            }}/>
            <Tab.Screen name='Config' component={Config} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: focused ? palette.primary : palette.dark,
                        width: '95%',
                        height: 45,
                        borderRadius: 50
                    }}>
                        <Icon name="settings" size={25} color={focused ? palette.dark : palette.primary}/>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    )
}

const Auth = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
                <Stack.Screen name='Welcome' component={Welcome}/>
                <Stack.Screen name='HomeScreen' component={Navigate}/>
                <Stack.Screen name='User' component={User}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Auth;