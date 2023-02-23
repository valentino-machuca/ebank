import React, { useState } from 'react';
import s from './stylesheet';

//assets
import { useFonts } from 'expo-font';
import palette from '../../../utilities/colors';

//native
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

const MyCards = () => {
    const [tapped, setTapped] = useState(0);

    const [fontsLoaded] = useFonts({
        Poppins: require("../../../../assets/fonts/Poppins-Regular.ttf"),
        PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
        PoppinsLight: require("../../../../assets/fonts/Poppins-Light.ttf")
    });

    if(!fontsLoaded) return null;

    const handlePress = (num) => {
        if(tapped === num){
            setTapped(0);
        }else{
            setTapped(num);
        }
    } 
    
    return (
        <View style={s.container}>
            <View style={s.cardcontainer}>
                <TouchableOpacity onPress={() => handlePress(1)} style={{
                    ...s.card,
                    top: tapped === 1 ? -30 : -10,
                    backgroundColor: palette.primary
                }}>
                    <Image
                        source={require('../../../../assets/cards/visa.png')}
                        style={{
                            width: 50,
                            height: 50,
                            tintColor: palette.dark
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            fontFamily: 'PoppinsLight',
                            marginTop: 15,
                            marginLeft: 10,
                            color: palette.dark
                        }}
                    >5423 XXXX XXXX 4111</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress(2)} style={{
                    ...s.card,
                    backgroundColor: palette.secondarylight,
                    top: tapped === 2 ? 10 : 50,
                }}>
                    <Image
                        source={require('../../../../assets/cards/mastercard.png')}
                        style={{
                            width: 50,
                            height: 50,
                            tintColor: palette.dark
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            fontFamily: 'PoppinsLight',
                            marginTop: 15,
                            marginLeft: 10,
                            color: palette.dark
                        }}
                    >8583 XXXX XXXX 0412</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress(3)} style={{
                    ...s.card,
                    backgroundColor: palette.primarydark,
                    top: tapped === 3 ? 80 : 110,
                }}>
                    <Image
                        source={require('../../../../assets/cards/visa.png')}
                        style={{
                            width: 50,
                            height: 50,
                            tintColor: palette.secondary
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            fontFamily: 'PoppinsLight',
                            marginTop: 15,
                            marginLeft: 10,
                            color: palette.secondary
                        }}
                    >4113 XXXX XXXX 4300</Text>
                </TouchableOpacity>
                <View style={s.tapa}></View>
            </View>
        </View>
    )
}

export default MyCards;