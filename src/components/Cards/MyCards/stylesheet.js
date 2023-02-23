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
        height: 150,
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
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        minWidth: '90%',
        height: 100,
        padding: 10,
        borderRadius: 15,
        backgroundColor: colors.dark,
        shadowColor: '#111111',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.55,
        shadowRadius: 3.5,
        elevation: 10
    }
})

export default styles;