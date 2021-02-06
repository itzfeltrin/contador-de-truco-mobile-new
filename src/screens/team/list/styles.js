import {StyleSheet} from 'react-native';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  colors,
} from '../../../assets/styles/appstyles';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: SCREEN_HEIGHT * 0.05,
    backgroundColor: '#FFF',
    position: 'relative',
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
    color: colors.primaryLighter,
    fontSize: 16,
  },
  list: {
    width: '100%',
    marginTop: 16,
  },
  backgroundSVG: {
    position: 'absolute',
    width: SCREEN_WIDTH * 1.25,
    height: SCREEN_HEIGHT * 1.5,
    top: '50%',
    left: '50%',
    transform: [
      {translateX: -(SCREEN_WIDTH * 1.25) / 2},
      {translateY: -SCREEN_HEIGHT / 1.5},
    ],
    opacity: 0.25,
  },
});

export default styles;
