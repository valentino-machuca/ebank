import React, { useState } from 'react';
import s from './stylesheet';

//assets
import { useFonts } from 'expo-font';
import palette from '../../utilities/colors';

//native
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

const Options = () => {

    const [fontsLoaded] = useFonts({
        Poppins: require("../../../assets/fonts/Poppins-Regular.ttf"),
        PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
        PoppinsLight: require("../../../assets/fonts/Poppins-Light.ttf")
    });

    if(!fontsLoaded) return null;
    
    return (
        <View style={s.container}>
            <TouchableOpacity style={s.option}>
                <Image 
                    source={require('../../../assets/options/plus.png')}
                    resizeMode='cover'
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: palette.dark
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={s.option}>
                <Image 
                    source={require('../../../assets/options/arrow.png')}
                    resizeMode='cover'
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: palette.dark,
                        transform: [{rotate: '-135deg'}]
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={s.option}>
                <Image 
                    source={require('../../../assets/options/arrow.png')}
                    resizeMode='cover'
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: palette.dark,
                        transform: [{rotate: '45deg'}]
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={s.option}>
                <Image 
                    source={require('../../../assets/options/transfer.png')}
                    resizeMode='cover'
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: palette.dark
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={s.option}>
                <Image 
                    source={require('../../../assets/options/history.png')}
                    resizeMode='cover'
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: palette.dark
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Text
                style={{
                    fontSize: 42,
                    fontFamily: 'PoppinsLight',
                    color: palette.dark
                }}
                >...</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Options;