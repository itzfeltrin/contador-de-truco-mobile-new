import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  item: {
    // width: '100%',
    padding: 8,
    marginBottom: 16,
    marginHorizontal: 32,
    borderWidth: 4,
    borderColor: '#1DBA2B',
    borderRadius: 8,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: -8,
      height: 16,
    },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 12,
  },
  name: {},
  nickname: {},
  detailButton: {
    marginLeft: 16,
  },
});

export default styles;
