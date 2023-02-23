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
import MyCards from './MyCards';

const Cards = () => {

    const [fontsLoaded] = useFonts({
        Poppins: require("../../../assets/fonts/Poppins-Regular.ttf"),
        PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
        PoppinsLight: require("../../../assets/fonts/Poppins-Light.ttf")
    });

    if(!fontsLoaded) return null;
    
    return (
        <View style={s.container}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderTopColor: '#2222221F',
                borderTopWidth: 1,
                width: '90%',
            }}>
                <Text
                style={{
                width: '90%',
                fontSize: 22,
                marginTop: 20,
                fontFamily: 'PoppinsLight',
                color: palette.dark,
                }}
                >Tarjetas</Text>
                <TouchableOpacity
                    style={{
                        padding: 5,
                        backgroundColor: palette.secondary,
                        borderRadius: 50
                    }}
                >
                    <Image
                        source={require('../../../assets/options/plus.png')}
                        style={{
                            width: 15,
                            height: 15,
                        }}
                    />
                </TouchableOpacity>
            </View>

            <View>
                <MyCards/>
            </View>
        </View>
    )
}

export default Cards;