import {StyleSheet} from 'react-native';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  colors,
} from '../../assets/styles/appstyles';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: SCREEN_HEIGHT * 0.05,
    paddingHorizontal: SCREEN_WIDTH * 0.1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  buttonGroup: {
    width: '100%',
    marginTop: 16,
  },
  button: {
    width: '100%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 4,
    borderColor: colors.primary,
    borderRadius: 8,
    backgroundColor: '#FFF',
    position: 'relative',
    overflow: 'hidden',
  },
  svg: {
    position: 'absolute',
    top: '-50%',
    left: 0,
    opacity: 0.5,
    transform: [{rotateZ: '45deg'}],
  },
  buttonText: {
    fontSize: 16,
  },
});

export default styles;
