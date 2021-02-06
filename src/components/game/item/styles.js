import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  item: {
    width: '100%',
    padding: 8,
    marginTop: 16,
    borderWidth: 4,
    borderColor: '#1DBA2B',
    borderRadius: 8,
    backgroundColor: '#FFF',
    flexDirection: 'row',
  },
  team: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nickname: {
    textAlign: 'center',
    fontSize: 16,
  },
  scoreBox: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  score: {
    fontSize: 18,
  },
  divider: {
    fontSize: 14,
    marginHorizontal: 4,
  },
});

export default styles;
