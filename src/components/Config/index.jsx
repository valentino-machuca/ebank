import React from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import s from './stylesheet';

//assets
import { useFonts } from 'expo-font';
import palette from '../../utilities/colors';


const Config = () => {

    const [fontsLoaded] = useFonts({
        Poppins: require("../../../assets/fonts/Poppins-Regular.ttf"),
        PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
        PoppinsLight: require("../../../assets/fonts/Poppins-Light.ttf")
    });

    if(!fontsLoaded) return null;

    return(
        <View style={s.container}>
            <TouchableOpacity>
                <Text
                    style={{
                        marginLeft: 5,
                        fontSize: 32,
                        color: palette.dark,
                        fontFamily: 'PoppinsLight',
                        padding: 8,
                    }}
                >Configuración</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Config;