import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Navigate from '../Navigation';


const Main = () => {

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight}}>  
            <NavigationContainer>
                <Navigate/>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default Main;