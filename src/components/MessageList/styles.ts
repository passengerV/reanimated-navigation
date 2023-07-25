import {StyleSheet} from 'react-native';
import {IS_IOS} from '../../shared';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: IS_IOS ? {transform: [{scaleY: -1}]} : {scaleY: -1}, //! React Native inverted FlatList causes performance issues on Android, thus this style to avoid issues.
});
