import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        width: '100%',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    avatarcard: {
        marginLeft: 10,
        width: '60%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
    }
})

export default styles;