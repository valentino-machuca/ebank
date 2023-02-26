import React, { useState } from 'react';
import s from './stylesheet'

//asstes
import palette from '../../utilities/colors';
import { useFonts } from 'expo-font';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalLanguage from './Modal';

//native
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    Modal,
    Pressable
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
        text: 'profile.bankInfo'
    },
    {
        icon: 'call-outline',
        text: 'profile.support'
    },
    {
        icon: 'shield-outline',
        text: 'profile.privacyPolicy'
    },
    {
        icon: 'document-text-outline',
        text: 'profile.terms'
    },
    {
        icon: 'language-outline',
        text: 'profile.language',
        openModal: true,
    },
    {
        icon: 'log-out-outline',
        text: 'profile.logout'
    },
]

const User = ({navigation}) => {
    const [openModal, setOpenModal] = useState(false); 

    const { t } = useTranslation('global');

    const [fontsLoaded] = useFonts({
        Poppins: require("../../../assets/fonts/Poppins-Medium.ttf"),
        PoppinsLight: require("../../../assets/fonts/Poppins-Light.ttf")
    });

    if(!fontsLoaded) return null;

    return (
        <View style={s.container}>
            { openModal ? <ModalLanguage openModal={openModal} setOpenModal={setOpenModal}/> : null}
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
                >{t('profile.title')}</Text>
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
                        width: 125,
                        height: 125,
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        borderWidth: 8,
                        borderRadius: 100,
                    }}
                />
                <Text
                    style={{
                        marginTop: 10,
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
                                width: '80%',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: "center",
                                marginTop: 20
                            }}
                            onPress={op.openModal ? () => setOpenModal(true) : null}
                            key={i}
                        >
                            <Icon name={op.icon} size={25} color={palette.dark}/>
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontFamily: 'PoppinsLight',
                                    marginLeft: 10,
        
                                }}
                            >{t(op.text)}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

export default User;