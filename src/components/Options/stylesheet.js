import { StyleSheet } from "react-native";
import colors from '../../utilities/colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        paddingLeft: 20,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 30,
    },
    option: {
        width: '13%',
        height: 46,
        borderRadius: 15,
        marginRight: 15,
        backgroundColor: colors.secondarylight,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styles;