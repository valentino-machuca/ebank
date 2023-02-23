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

import example1 from '../../../assets/others/example1.jpg'
import example2 from '../../../assets/others/example2.jpg'
import example3 from '../../../assets/others/example3.jpg'
import example4 from '../../../assets/others/example4.jpg'
import example5 from '../../../assets/others/example5.jpg'
import example6 from '../../../assets/header/avatar.jpg'

const images = [
    example1,
    example2,
    example3,
    example4,
    example5,
    example6
];

const items = [
    {
        name: 'Nike',
        reason: 'Compras',
        image: 1,
        entrance: false,
        amount: "16.000'00"
    },
    {
        name: 'Lucas Luquini',
        reason: 'Transferencia recibida',
        image: 2,
        entrance: true,
        amount: "5.000'00"
    },
    {
        name: 'Luna Salva',
        reason: 'Transferencia enviada',
        image: 3,
        entrance: false,
        amount: "1.000'40"
    },
    {
        name: 'Soledad Pesto',
        reason: 'Transferencia enviada',
        image: 4,
        entrance: false,
        amount: "1.320'50"
    }
]

const items2 = [
    {
        name: 'Nike',
        reason: 'Compras',
        image: 1,
        entrance: false,
        amount: "16.000'00"
    },
    {
        name: 'Lucas Luquini',
        reason: 'Transferencia recibida',
        image: 2,
        entrance: true,
        amount: "5.000'00"
    },
    {
        name: 'Luna Salva',
        reason: 'Transferencia enviada',
        image: 3,
        entrance: false,
        amount: "1.000'40"
    },
    {
        name: 'Soledad Pesto',
        reason: 'Transferencia enviada',
        image: 4,
        entrance: false,
        amount: "1.320'50"
    },
    {
        name: "McDonald's",
        reason: 'Delivery',
        image: 5,
        entrance: false,
        amount: "2.340'00"
    },
    {
        name: 'Tú',
        reason: 'Carga por CBU',
        image: 6,
        entrance: true,
        amount: "13.000'00"
    },
    {
        name: 'Soledad Pesto',
        reason: 'Transferencia enviada',
        image: 4,
        entrance: true,
        amount: "1.000'50"
    },
]

const LastTransactions = () => {
    const [more, setMore] = useState(false);

    const [fontsLoaded] = useFonts({
        Poppins: require("../../../assets/fonts/Poppins-Regular.ttf"),
        PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
        PoppinsLight: require("../../../assets/fonts/Poppins-Light.ttf")
    });

    if(!fontsLoaded) return null;
    let data = more ? items2 : items;
    
    return(
        <View style={s.container}>
            <View style={{
                width: '100%',
            }}>
                <Text
                style={{
                width: '100%',
                fontSize: 22,
                marginLeft: 20,
                fontFamily: 'PoppinsLight',
                color: palette.dark,
                }}
                >Últimos movimientos</Text>
            </View>

            <View style={s.items}>
                {
                    data.map((item, i) => (
                        <TouchableOpacity style={s.items.card} key={i}>
                            <View style={s.items.avatarcard}>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100%',
                                    width: '30%'
                                }}>
                                    <Image source={images[item.image-1]}
                                        resizeMode='cover'
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderColor: 'rgba(0, 0, 0, 0.3)',
                                            borderWidth: 2,
                                            borderRadius: 50,
                                        }}
                                    />
                                </View>
                                <View style={{
                                    width: '60%',
                                }}>
                                    <Text style={{
                                        fontSize: 18,
                                        fontFamily: 'Poppins',
                                        color: palette.dark,
                                    }}>{item.name}</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        fontFamily: 'PoppinsLight',
                                        color: palette.dark,
                                        opacity: 0.7
                                    }}>{item.reason}</Text>
                                </View>
                            </View>
                            <View style={{
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    width: '40%',
                                }}>
                                <Text style={{
                                        fontSize: 18,
                                        fontFamily: 'PoppinsSemiBold',
                                        color: item.entrance ? palette.secondary : palette.dark,
                                }}>{item.entrance ? `+ ${item.amount} $` : `- ${item.amount} $`}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>

            <View style={{
                width: '100%',
            }}>
                <TouchableOpacity onPress={() => setMore(prev => !prev)}>
                <Text
                style={{
                width: '100%',
                fontSize: 18,
                marginTop: 10,
                fontFamily: 'PoppinsLight',
                color: palette.dark,
                textAlign: 'center',
                opacity: 0.6
                }}
                >{more ? 'Ver Menos' : 'Ver más'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LastTransactions;