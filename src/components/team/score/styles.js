import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
    marginTop: 8,
    borderWidth: 4,
    borderColor: '#1DBA2B',
    borderRadius: 8,
    backgroundColor: '#10661820',
  },
  nickname: {
    fontSize: 18,
  },
  nameBox: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    textAlign: 'center',
  },
  score: {
    width: '100%',
    borderTopWidth: 0.25,
    borderTopColor: '#747474',
    marginTop: 4,
    paddingTop: 4,
    fontSize: 32,
    textAlign: 'center',
  },
  buttonGroup: {
    width: '100%',
  },
  buttonBox: {
    backgroundColor: '#106618',
    width: '100%',
    marginTop: 8,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
});

export default styles;
