import { StyleSheet } from "react-native";
import colors from '../../utilities/colors';

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    items: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        width: '100%',
        card: {
            marginTop: 10,
            width: '95%',
            height: 60,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: "center",
        },
        avatarcard: {
            width: '60%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "flex-start",
            alignItems: "center",
        }
    }
})

export default styles;