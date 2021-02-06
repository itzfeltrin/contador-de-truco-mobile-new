import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  errorBox: {
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
    backgroundColor: '#FF484840',
  },
  errorItem: {
    color: '#FF4848',
  },
});

export default styles;
