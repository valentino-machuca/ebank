import React, { useEffect, useRef } from 'react';
import s from './stylesheet.js';

//assets
import { useFonts } from 'expo-font';
import palette from '../../../utilities/colors';

//native
import {
    View,
    Text,
    Image,
    Animated,
    TouchableOpacity
} from 'react-native';

import example1 from '../../../../assets/others/example1.jpg'
import example2 from '../../../../assets/others/example2.jpg'
import example3 from '../../../../assets/others/example3.jpg'
import example4 from '../../../../assets/others/example4.jpg'
import example5 from '../../../../assets/others/example5.jpg'
import example6 from '../../../../assets/header/avatar.jpg'

const images = [
    example1,
    example2,
    example3,
    example4,
    example5,
    example6
];

const Movement = ({item, i}) => {
    const opacityProgress = useRef(new Animated.Value(0)).current;
    const movementX = useRef(new Animated.Value(100)).current;

    const [fontsLoaded] = useFonts({
        Poppins: require("../../../../assets/fonts/Poppins-Regular.ttf"),
        PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
        PoppinsLight: require("../../../../assets/fonts/Poppins-Light.ttf")
    });

    useEffect(() => {
        Animated.sequence([
            Animated.delay((i*50)),
            Animated.spring(opacityProgress, { toValue: 1, duration: 500, useNativeDriver: true }),
        ]).start();
        Animated.sequence([
            Animated.delay((i*50)),
            Animated.spring(movementX, { toValue: 0, duration: 500, useNativeDriver: true }),
        ]).start();
        
    }, [])

    if(!fontsLoaded) return null;
    
    return(
        <Animated.View style={{
            ...s.card,
            transform:[{translateX: movementX}],
            opacity: opacityProgress,
            }}>
            <TouchableOpacity style={s.card}>
                <View style={s.avatarcard}>
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
                        width: '70%',
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
                        justifyContent: "center",
                        alignItems: "flex-start",
                        width: '30%',
                    }}>
                    <Text style={{
                            fontSize: 18,
                            fontFamily: 'PoppinsSemiBold',
                            color: item.entrance ? palette.secondary : palette.dark,
                    }}>{item.entrance ? `+ ${item.amount}` : `- ${item.amount}`}</Text>
                </View>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default Movement;