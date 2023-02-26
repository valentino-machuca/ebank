import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import Auth from '../Navigation';


const Main = () => {

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight}}>  
            <Auth/>
        </SafeAreaView>
    )
}

export default Main;