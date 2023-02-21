import React from 'react'
import s from './stylesheet'


//assets
import { useFonts } from 'expo-font';
import palette from '../../utilities/colors';

//native
import { 
    View,
    Text,
    TouchableOpacity
} from 'react-native'


const Balance = () => {

    const [fontsLoaded] = useFonts({
        Poppins: require("../../../assets/fonts/Poppins-Regular.ttf"),
        PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
        PoppinsLight: require("../../../assets/fonts/Poppins-Light.ttf")
    });

    if(!fontsLoaded) return null;

    return(
        <View style={s.container}>
            <View style={s.balance}>
                    <View style={{
                        ...s.balance.amount,
                        borderBottomWidth: 1,
                        borderBottomColor: '#22222226'
                        }}>
                        <Text
                        style={{
                            width: '100%',
                            fontSize: 18,
                            marginLeft: 20,
                            fontFamily: 'PoppinsLight',
                            color: palette.dark,
                            opacity: 0.4
                        }}
                        >Balance</Text>
                        <TouchableOpacity>
                        <View style={s.balance.cash}>
                            <Text
                                style={{
                                    fontSize: 22,
                                    fontFamily: 'Poppins',
                                    color: palette.dark,
                                    height: '80%',
                                    marginLeft: 5,
                                    marginRight: 5,
                                }}
                            >
                                $
                            </Text>
                            <Text
                                style={{
                                    fontSize: 46,
                                    fontFamily: 'PoppinsSemiBold',
                                    color: palette.dark,
                                }}
                            >
                                16.240
                            </Text>
                            <Text
                                style={{
                                    fontSize: 22,
                                    fontFamily: 'PoppinsLight',
                                    color: palette.dark,
                                    height: '80%',
                                    marginLeft: 5
                                }}
                            >
                                .50
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={s.balance.addcash}>
                        <Text
                        style={{
                            fontSize: 16,
                            fontFamily: 'PoppinsLight',
                            color: palette.dark,
                        }}
                        >Añadir Fondos</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={s.lineContainer}>
                <View style={s.line}/>
            </View>
        </View>
    )
}

export default Balance;