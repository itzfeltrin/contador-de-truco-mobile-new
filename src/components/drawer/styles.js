import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 16,
    justifyContent: 'space-between',
  },
  drawerSection: {},
  drawerItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  drawerItemLabel: {
    fontSize: 18,
    color: '#106618',
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 16,
  },
  label: {
    marginLeft: 20,
  },
});

export default styles;
