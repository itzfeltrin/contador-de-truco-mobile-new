import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../assets/styles/appstyles';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: SCREEN_WIDTH * 0.65,
    height: SCREEN_WIDTH * 0.65,
    resizeMode: 'contain',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 36,
    color: '#FFF',
    textShadowColor: '#000',
    textShadowOffset: {
      width: -4,
      height: 4,
    },
    textShadowRadius: 8,
    marginTop: -32,
  },
  description: {
    fontSize: 16,
    color: '#FFF',
    textShadowColor: '#000',
    textShadowOffset: {
      width: -3,
      height: 3,
    },
    textShadowRadius: 8,
  },
});

export default styles;
