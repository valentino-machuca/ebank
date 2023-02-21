import React from 'react'
import { View, Image, Text } from 'react-native';

//utilities
import palette from '../../utilities/colors';
import screenOptions from './stylesheet';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import Home from '../Home';
import Info from '../Info';
import Wallet from '../Wallet';

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
                        <Image
                            source={require('../../../assets/Icons/navbar/home.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? palette.dark : palette.primary
                            }}
                        />
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
                        <Image
                            source={require('../../../assets/Icons/navbar/qr.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? palette.dark : palette.primary
                            }}
                        />
                    </View>
                )
            }}/>
            <Tab.Screen name='Wallet' component={Wallet} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: focused ? palette.primary : palette.dark,
                        width: '95%',
                        height: 45,
                        borderRadius: 50
                    }}>
                        <Image
                            source={require('../../../assets/Icons/navbar/config.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? palette.dark : palette.primary
                            }}
                        />
                    </View>
                )
            }}/>
        </Tab.Navigator>
    )
}

export default Navigate;