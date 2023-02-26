import { StyleSheet } from "react-native";
import colors from '../../utilities/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10
    },
    profile: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 300,
        marginTop: 20,
    },
    menu: {
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }
})

export default styles;