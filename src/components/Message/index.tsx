import React, {memo, useMemo} from 'react';
import {getStyles} from './styles';
import {ChatMessage} from '../../shared';
import {getEnteringAnimation} from './getEnteringAnimation';
import {getRandomWidth} from '../../utils';
import {CustomText} from '../CustomText';
import Animated from 'react-native-reanimated';

const MIN_WIDTH = 30;
const MAX_WIDTH = 90;

interface Props {
  message: ChatMessage;
  parentInitializedAt?: number;
}

export const Message: React.FC<Props> = memo(
  ({message, parentInitializedAt}) => {
    const width = useMemo(() => getRandomWidth(MIN_WIDTH, MAX_WIDTH), []);
    const styles = useMemo(() => getStyles(width), [width]);
    const containerStyle = useMemo(
      () => ({...styles.container, ...styles.inverted}),
      [styles.container, styles.inverted],
    );

    const enteringAnimation = useMemo(
      () => getEnteringAnimation(parentInitializedAt, message?.createdAt),
      [message?.createdAt, parentInitializedAt],
    );

    return (
      <Animated.View entering={enteringAnimation} style={containerStyle}>
        <CustomText content={message.text} style={styles.text} />
      </Animated.View>
    );
  },
);
