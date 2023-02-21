import React from 'react'
import {
    View,
    Text,
    ScrollView,
    Image
} from 'react-native';
import s from './stylesheet';

import Header from '../Header';
import Balance from '../Balance';
import LastTransactions from '../LastTransactions';


const Home = () => {

    return(
        <ScrollView style={s.container}>
            <Header/>
            <Balance/>
            <LastTransactions/>
        </ScrollView>
    )
}

export default Home;