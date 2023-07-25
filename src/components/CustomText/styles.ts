import {StyleSheet} from 'react-native';

const DEFAULT_COLOR = 'black';

export const getStyles = (color?: string) =>
  StyleSheet.create({
    text: {
      color: color || DEFAULT_COLOR,
    },
  });
