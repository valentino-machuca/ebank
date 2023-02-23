import { StyleSheet } from "react-native";
import colors from '../../../utilities/colors';


const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        width: '100%',
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    cardcontainer: {
        position: 'relative',
        minWidth: "90%",
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: colors.dark
    },
    card:{
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        minWidth: '80%',
        height: 140,
        padding: 10,
        borderRadius: 5,
        shadowColor: '#111111',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    cardtapped: {
        top: 10,
    },
    tapa:{
        top: '65%',
        left: '0%',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        minWidth: '45%',
        height: 100,
        padding: 10,
        borderRadius: 15,
        borderTopRightRadius: 14,
        backgroundColor: colors.dark,
    },
    borde:{
        top: '70.2%',
        left: '40%',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        minWidth: '46%',
        height: 62,
        padding: 10,
        borderTopRightRadius: 15,
        backgroundColor: colors.dark,
        transform: [{rotate: '11deg'}],
    }
})

export default styles;