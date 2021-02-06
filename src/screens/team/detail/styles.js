import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 32,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    padding: 16,
    marginTop: 16,
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#1DBA2B',
    borderRadius: 8,
  },
  goBackButton: {
    alignSelf: 'flex-start',
  },
  goBackText: {
    fontSize: 16,
    color: '#1DBA2B',
  },
  title: {
    fontSize: 24,
  },
  name: {
    fontSize: 24,
  },
  nickname: {
    fontSize: 16,
    marginTop: -12,
    marginBottom: 16,
    color: '#CDCDCD',
  },
  info: {
    width: '100%',
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
  },
  itemText: {
    fontSize: 20,
    textAlign: 'center',
  },
  itemResult: {
    fontSize: 22,
  },
});

export default styles;
