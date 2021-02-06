import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 32,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  buttonBox: {
    alignSelf: 'flex-end',
    marginRight: 32,
  },
  buttonText: {
    color: '#106618',
    fontSize: 16,
  },
  list: {
    width: '100%',
    marginTop: 16,
  },
});

export default styles;
