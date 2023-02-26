import React from 'react';

//assets
import { useFonts } from 'expo-font';
import palette from '../../../utilities/colors';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';

//native
import {
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const ModalLanguage = ({openModal, setOpenModal}) => {

    const [ t, i18n ] = useTranslation('global');
    
    const [fontsLoaded] = useFonts({
        Poppins: require("../../../../assets/fonts/Poppins-Regular.ttf"),
        PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
        PoppinsLight: require("../../../../assets/fonts/Poppins-Light.ttf")
    });

    if(!fontsLoaded) return null;
    
    return (
        <Modal
        animationType="fade"
        transparent={true}
        visible={openModal}
        onRequestClose={() => {
        setOpenModal(!openModal);
        }}>
            <View style={styles.container}>
                <View style={styles.box}>
                    <View
                        style={{
                            width: '100%',
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            marginTop: 5
                        }}
                    >   
                        <TouchableOpacity onPress={() => setOpenModal(!openModal)}>
                            <Icon name='chevron-back-outline' size={28} color={palette.dark}/>
                        </TouchableOpacity>
                        <Text
                        style={{
                            fontSize: 20,
                            fontFamily: "PoppinsLight",
                            width: '83%',
                            textAlign: "center"
                        }}
                        >{t('profile.language')}</Text>
                    </View>
                    <View
                        style={{
                            width: '100%',
                            height: '80%',
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginTop: 20,
                        }}
                    >   
                        <TouchableOpacity style={styles.option}
                            onPress={() => {
                                i18n.changeLanguage('es');
                                setOpenModal(false);
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontFamily: 'PoppinsLight',
                                    color: palette.primary
                                }}
                            >{t('profile.es')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.option}
                            onPress={() => {
                                i18n.changeLanguage('en');
                                setOpenModal(false);
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontFamily: 'PoppinsLight',
                                    color: palette.primary
                                }}
                            >{t('profile.en')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    box:{
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: "40%",
        borderColor: '#ccc',
        borderWidth: 1,
        borderStyle: 'solid',
        elevation: 20,
        padding: 10,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        backgroundColor: palette.primary
    },
    option:{
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: 10,
        width: '99%',
        backgroundColor: palette.dark,
        padding: 10,
        borderRadius: 10,
        opacity: 1
    }
})

export default ModalLanguage;