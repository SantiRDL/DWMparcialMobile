// styles.js
import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    maxWidth: width * 0.85,
  },
  addButton: {
    backgroundColor: Platform.OS === 'android' ? 'blue' : 'green',
    color: Platform.OS === 'android' ? 'white' : 'black',
    alignSelf: Platform.OS === 'android' ? 'flex-start' : 'flex-end',
  },
});