import React, {useCallback, useRef} from 'react';
import {styles} from './styles';
import {getNewMessage} from './getNewMessage';
import {ChatMessage} from '../../shared';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {CustomText} from '../CustomText';

interface Props {
  onSend?: (message: ChatMessage) => void;
}

export const Composer: React.FC<Props> = ({onSend}) => {
  const messageCounter = useRef(0);

  const handleOnPress = useCallback(() => {
    onSend?.(getNewMessage(messageCounter.current));
    messageCounter.current += 1;
  }, [onSend]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleOnPress} style={styles.button}>
        <CustomText content="Add message" color="white" style={styles.text} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
