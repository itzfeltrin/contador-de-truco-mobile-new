import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/styles/appstyles';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
  },
  container: {
    paddingHorizontal: 16,
    borderRadius: 8,
    width: '100%',
    flex: 1,
  },
  goBackButton: {
    alignSelf: 'flex-start',
  },
  goBackText: {
    fontSize: 16,
    color: colors.primary,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
  },
  inputBox: {
    marginBottom: 16,
  },
  inputText: {
    borderWidth: 4,
    borderColor: colors.primary,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  errorText: {
    color: colors.error,
    marginTop: 2,
    marginLeft: 4,
  },
  buttonBox: {
    borderRadius: 8,
    backgroundColor: '#106618',
    height: 56,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default styles;
