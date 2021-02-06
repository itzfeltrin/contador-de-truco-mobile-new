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

  // picker related
  selectContainer: {
    width: '100%',
    flex: 1,
  },
  selectBox: {
    width: '100%',
    marginTop: 16,
  },
  selectTitle: {
    fontSize: 16,
  },
  select: {
    padding: 8,
    marginTop: 4,
    borderWidth: 4,
    borderColor: '#1DBA2B',
    borderRadius: 8,
    backgroundColor: '#FFF',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {},
  selectedItem: {},
  confirmButtonContainer: {
    backgroundColor: '#106618',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBox: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#106618',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default styles;
