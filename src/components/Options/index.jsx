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

import Icon from 'react-native-vector-icons/Ionicons';

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
                <Icon name="add-sharp" size={28} color={palette.dark}/>
            </TouchableOpacity>
            <TouchableOpacity style={s.option}>
                <Icon 
                    name='arrow-back'
                    size={28}
                    color={palette.dark}
                    style={{
                        transform: [{rotate: '-45deg'}]
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={s.option}>
                <Icon 
                    name='arrow-back'
                    size={28}
                    color={palette.dark}
                    style={{
                        transform: [{rotate: '135deg'}]
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={s.option}>
                <Icon name="repeat" size={28} color={palette.dark}/>
            </TouchableOpacity>
            <TouchableOpacity style={s.option}>
                <Icon name="list" size={28} color={palette.dark}/>
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