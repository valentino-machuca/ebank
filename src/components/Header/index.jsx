import React from 'react';
import s from './stylesheet'

//asstes
import palette from '../../utilities/colors';
import { useFonts } from 'expo-font';

//native
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

const Header = () => {

    const [fontsLoaded] = useFonts({
        Poppins: require("../../../assets/fonts/Poppins-Medium.ttf"),
        PoppinsLight: require("../../../assets/fonts/Poppins-Light.ttf")
    });

    if(!fontsLoaded) return null;

    return (
        <View style={s.container}>
            <View style={s.avatar}>
                <TouchableOpacity>
                    <Image 
                    source={require('../../../assets/header/avatar.jpg')}
                    resizeMode='cover'
                    style={{
                        width: 50,
                        height: 50,
                        borderColor: 'rgba(0, 0, 0, 0.3)',
                        borderWidth: 5,
                        borderRadius: 50,
                    }}
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        marginLeft: 5,
                        fontSize: 16,
                        color: palette.dark,
                        fontFamily: 'PoppinsLight',
                        padding: 8,
                        backgroundColor: palette.secondary,
                        borderRadius: 5
                    }}
                >Hola, Valentino</Text>
            </View>
            <View style={s.notifications}>
                <TouchableOpacity>
                    <Image 
                        source={require('../../../assets/header/envelope.png')}
                        resizeMode='cover'
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;