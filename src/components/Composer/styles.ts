import {StyleSheet} from 'react-native';

const BORDER_WIDTH = 3;
const BUTTON_HEIGHT = 30;
const BORDER_COLOR = 'black';
const BUTTON_COLOR = '#328094';

export const styles = StyleSheet.create({
  container: {
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: BORDER_COLOR,
    borderTopWidth: BORDER_WIDTH,
  },
  button: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    height: BUTTON_HEIGHT,
    backgroundColor: BUTTON_COLOR,
    borderRadius: BUTTON_HEIGHT / 2,
  },
  text: {
    fontWeight: '700',
  },
});
