import palette from '../../utilities/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#111111',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
});

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: palette.dark,
    borderRadius: 30,
    width: '90%',
    height: 50,
    ...styles.shadow,
  }
};

export default screenOptions;