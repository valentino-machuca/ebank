import { StyleSheet } from "react-native";
import colors from '../../utilities/colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 160,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    balance: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100%',
        width: '60%',
        amount: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            padding: 10,
        },
        cash: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
        },
        addcash: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '85%',
            height: 35,
            backgroundColor: colors.primarydark,
            borderRadius: 5
        }
    },
    lineContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 160,
        width: '40%',
    },
    line: {
        width: '100%',
        borderBottomColor: '#22222226',
        borderBottomWidth: 1,
        transform: [{rotate: '140deg'}],
        left: '-11.5%',
        top: '21%'
    }
})

export default styles;