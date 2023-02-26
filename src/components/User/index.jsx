import React from 'react';
import s from './stylesheet'

//asstes
import palette from '../../utilities/colors';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';

//native
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

const user = {
    name: 'Valentino',
    lastname: 'Machuca',
    username: '@valmachucaa',
    city: 'Jovita, Córdoba',
    country: 'ARG'
}

const menuItems = [
    {
        icon: 'information-circle-outline',
        text: 'Información Bancaria'
    },
    {
        icon: 'call-outline',
        text: 'Soporte'
    },
    {
        icon: 'shield-outline',
        text: 'Política de privacidad'
    },
    {
        icon: 'document-text-outline',
        text: 'Términos y condiciones'
    },
    {
        icon: 'log-out-outline',
        text: 'Cerrar sesión'
    },
]

const User = ({navigation}) => {

    const [fontsLoaded] = useFonts({
        Poppins: require("../../../assets/fonts/Poppins-Medium.ttf"),
        PoppinsLight: require("../../../assets/fonts/Poppins-Light.ttf")
    });

    if(!fontsLoaded) return null;

    return (
        <View style={s.container}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: 10,
                width: '100%'
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}
                    style={{
                        width: '15%',
                        justifyContent: 'center',
                        alignItems: "center",
                    }}
                >
                    <Icon name="chevron-back-outline" size={32} color={palette.dark}/>
                </TouchableOpacity>
                <Text
                    style={{
                        width: '70%',
                        textAlign: 'center',
                        fontSize: 22,
                        fontFamily: 'PoppinsLight'
                    }}
                >Mi perfil</Text>
                <TouchableOpacity
                    style={{
                        width: '15%',
                        justifyContent: 'center',
                        alignItems: "center",
                    }}
                >
                    <Icon name="pencil-sharp" size={20} color={palette.dark}/>
                </TouchableOpacity>
            </View>
            <View style={s.profile}>
                <Image
                    source={require('../../../assets/header/avatar.jpg')}
                    resizeMode='cover'
                    style={{
                        width: 150,
                        height: 150,
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        borderWidth: 8,
                        borderRadius: 100,
                    }}
                />
                <Text
                    style={{
                        marginTop: 20,
                        fontSize: 24,
                        fontFamily: "Poppins",
                        color: palette.dark,
                    }}
                >{`${user.name} ${user.lastname}`}</Text>
                <Text
                    style={{
                        fontSize: 14,
                        fontFamily: "PoppinsLight",
                        color: palette.dark,
                        opacity: 0.7,
                    }}
                >{`${user.username}`}</Text>
                                <Text
                    style={{
                        fontSize: 14,
                        fontFamily: "PoppinsLight",
                        color: palette.dark,
                        opacity: 0.7,
                    }}
                >{`${user.city} | ${user.country}`}</Text>
            </View>
            <View style={s.menu}>
                {
                    menuItems.map((op, i) => (
                        <TouchableOpacity
                            style={{
                                width: '58%',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: "center",
                                marginTop: 20
                            }}
                            key={i}
                        >
                            <Icon name={op.icon} size={25} color={palette.dark}/>
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontFamily: 'PoppinsLight',
                                    marginLeft: 10,
        
                                }}
                            >{op.text}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

export default User;