import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
  scoreGroup: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 16,
  },
  buttonBox: {
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#106618',
    marginHorizontal: 16,
    borderRadius: 8,
  },
  restartButton: {
    width: '100%',
    marginTop: 16,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#10661820',
    borderWidth: 4,
    borderColor: '#1DBA2B',
    marginHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default styles;
