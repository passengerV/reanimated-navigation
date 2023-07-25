import {DimensionValue, StyleSheet} from 'react-native';
import {IS_IOS} from '../../shared';

const HEIGHT = 50;
const SPACING = 10;
const FONT_SIZE = 18;
const FONT_WEIGHT = '700';
const BACKGROUND = '#412656';

export const getStyles = (width: DimensionValue) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      height: HEIGHT,
      width,
      marginLeft: SPACING,
      backgroundColor: BACKGROUND,
      marginVertical: SPACING,
      borderRadius: HEIGHT / 2,
    },
    text: {
      color: 'white',
      fontWeight: FONT_WEIGHT,
      fontSize: FONT_SIZE,
    },
    inverted: IS_IOS ? {transform: [{scaleY: -1}]} : {scaleY: -1},
  });
