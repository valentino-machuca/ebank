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
import { ScrollView } from 'react-native-gesture-handler';

const items = [
    {
        title: 'DESCUENTOS DE FIN DE SEMANA! 50% OFF',
        text: "Bankame te trae los mejores descuentos hasta el 28/02 en las tiendas adheridas. Accede aquí para más información.",
        date: '26/02 15:42'
    },
    {
        title: 'TRANSFERENCIA ENVIADA',
        text: "Se ha enviado correctamente tu transferencia a Luna Salva",
        date: '26/02 12:05'
    },
    {
        title: 'ENVIO GRATIS PEDIDOSYA',
        text: "En compras con delivery mayores a 5.000$ te regalamos el envió, utiliza el codigo ENVIOGRATISBANK",
        date: '26/02 10:35'
    },
    {
        title: 'CANJEA TUS PUNTOS EBANK! LOS MEJORES BENEFICIOS',
        text: "Tienes disponible 45.230 puntos en BeneficioEbank, apurate a canjearlos por los mejores premios y sorteos antes de que se agoten!",
        date: '26/02 09:21'
    },
    {
        title: 'TRANSFERENCIA ENVIADA',
        text: "Se ha enviado correctamente tu transferencia a Soledad Pesto",
        date: '26/02 08:30'
    },
]

const ModalNotifications = ({openModal, setOpenModal}) => {

    const [ t, i18n ] = useTranslation('global');
    
    const [fontsLoaded] = useFonts({
        Poppins: require("../../../../assets/fonts/Poppins-Regular.ttf"),
        PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
        PoppinsLight: require("../../../../assets/fonts/Poppins-Light.ttf")
    });

    if(!fontsLoaded) return null;
    
    return (
        <Modal
        animationType="slide"
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
                        >{t('header.notifications')}</Text>
                    </View>
                    <ScrollView
                        style={{
                            width: '100%',
                            height: '80%',
                            marginTop: 20,
                        }}
                    >   
                    {
                        items.map((item, i) => (
                            <TouchableOpacity style={styles.option} key={i}>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontFamily: 'Poppins',
                                        color: palette.primary
                                    }}
                                >{item.title}</Text>
                                <Text
                                    style={{
                                        marginTop: 5,
                                        fontSize: 13,
                                        fontFamily: 'PoppinsLight',
                                        color: palette.primary,
                                        opacity: 0.5
                                    }}
                                >{item.text}</Text>
                                <Text
                                    style={{
                                        marginTop: 20,
                                        fontSize: 13,
                                        fontFamily: 'PoppinsLight',
                                        color: palette.primary,
                                        opacity: 0.5
                                    }}
                                >{item.date}</Text>
                            </TouchableOpacity>
                        ))
                    }
                    </ScrollView>
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
        height: "100%",
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
        padding: 15,
        borderRadius: 10,
        opacity: 1
    }
})

export default ModalNotifications;