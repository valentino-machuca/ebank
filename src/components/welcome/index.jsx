import React, { useEffect, useRef } from 'react';
import s from './stylesheet'

//asstes
import palette from '../../utilities/colors';
import { useFonts } from 'expo-font';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import * as LocalAuthentication from 'expo-local-authentication';

//native
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    Animated
} from 'react-native';

const Welcome = ({navigation}) => {
    const movementX = useRef(new Animated.Value(300)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.spring(movementX, { toValue: 0, useNativeDriver: true }).start();
        Animated.spring(opacityAnim, { toValue: 1, useNativeDriver: true }).start();
    }, [])

    const handleAuth = async () => {
        const biometrics = await LocalAuthentication.authenticateAsync({
            promptMessage: t('welcome.fingerprint'),
            cancelLabel: t('welcome.cancel'),
            disableDeviceFallback: true,
        });

        if(biometrics.success){
            navigation.navigate('HomeScreen')
        }
    }

    const { t } = useTranslation('global');

    const [fontsLoaded] = useFonts({
        Poppins: require("../../../assets/fonts/Poppins-Medium.ttf"),
        PoppinsLight: require("../../../assets/fonts/Poppins-Light.ttf"),
        PoppinsBold: require("../../../assets/fonts/Poppins-Bold.ttf")
    });

    if(!fontsLoaded) return null;

    return (
        <Animated.View style={{...s.container, transform:[{translateX: movementX}], opacity: opacityAnim}}>
            <View style={{
                marginTop:"20%",
                width: '100%',
            }}>
                <Image 
                    source={require('../../../assets/header/avatar.jpg')}
                    resizeMode='cover'
                    style={{
                        width: 60,
                        height: 60,
                        marginLeft: '10%',
                        marginBottom: 10,
                        borderColor: '#22222288',
                        borderRadius: 50,
                        borderWidth: 7,
                    }}
                />
                <Text style={{
                    fontSize: 34,
                    fontFamily: 'Poppins',
                    marginLeft: "10%",
                    color: palette.dark
                }}>
                    {t('welcome.welcomeback')}
                </Text>
                <Text style={{
                    fontSize: 20,
                    marginLeft: "10%",
                    fontFamily: 'PoppinsLight',
                    color: palette.dark,
                }}>
                    Valentino Machuca
                </Text>
            </View>
            <View style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: 150,
                marginBottom: 40,
            }}>
                <TouchableOpacity style={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
                onPress={handleAuth}
                >
                    <Icon name="finger-print-outline" size={50} color={palette.dark}/>
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

export default Welcome;