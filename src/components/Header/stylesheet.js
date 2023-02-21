import { StyleSheet } from "react-native";
import colors from '../../utilities/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10
    },
    avatar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        alignItems: 'center',
        width: '85%',
        height: 60,
    },
    notifications: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingRight: 10,
        alignItems: 'center',
        width: '15%',
        height: 60,
    }
})

export default styles;