import React, { useEffect, useRef } from 'react'
import {
    Animated
} from 'react-native';
import s from './stylesheet';

import Header from '../Header';
import Balance from '../Balance';
import LastTransactions from '../LastTransactions';
import Options from '../Options';
import Cards from '../Cards';


const Home = ({navigation}) => {
    const movementX = useRef(new Animated.Value(100)).current;

    useEffect(() => {
        Animated.spring(movementX, { toValue: 0, useNativeDriver: true }).start();
    }, [])

    return(
        <Animated.ScrollView style={{...s.container, transform:[{translateX: movementX}]}}>
            <Header navigation={navigation}/>
            <Balance/>
            <Options/>
            <LastTransactions/>
            <Cards/>
        </Animated.ScrollView>
    )
}

export default Home;