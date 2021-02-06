import {StyleSheet, Dimensions} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const colors = {
  primary: '#1DBA2B',
  primaryDark: '#0C4C12',
  primaryLighter: '#106618',
  error: '#FF3333',
};

export const appStyles = StyleSheet.create({
  thinText: {
    fontFamily: 'Poppins-Thin',
  },
  lightText: {
    fontFamily: 'Poppins-Light',
  },
  regularText: {
    fontFamily: 'Poppins-Regular',
  },
  semiBoldText: {
    fontFamily: 'Poppins-SemiBold',
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
  },

  row: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
  },
});
