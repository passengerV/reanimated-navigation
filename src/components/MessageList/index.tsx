import {ChatMessage} from '../../shared';
import React, {useCallback, memo, useRef} from 'react';
import {ListRenderItem, ListRenderItemInfo, SafeAreaView} from 'react-native';
import {Message} from '../Message';
import {styles} from './styles';
import Animated, {Layout} from 'react-native-reanimated';

const SCROLL_EVENT_THROTTLE = 1000;
const LAYOUT_MASS = 100;

const keyExtractor = (element: ChatMessage) => element._id;
interface Props {
  messages: ChatMessage[];
}

export const MessageList: React.FC<Props> = memo(({messages}) => {
  const listRef = useRef<any>(null);
  const initializedAt = useRef<number>(new Date().getTime());

  const renderItem: ListRenderItem<ChatMessage> = useCallback(
    ({item: message}: ListRenderItemInfo<ChatMessage>) => {
      return (
        <Message
          message={message}
          parentInitializedAt={initializedAt.current}
        />
      );
    },
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        ref={listRef}
        data={messages}
        style={styles.list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        keyboardDismissMode={'on-drag'}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={SCROLL_EVENT_THROTTLE}
        itemLayoutAnimation={Layout.mass(LAYOUT_MASS)}
      />
    </SafeAreaView>
  );
});
