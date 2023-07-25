import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {Composer, MessageList} from './components';
import {ChatMessage} from './shared';

export const App: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleOnSend = useCallback((newMessage: ChatMessage) => {
    setMessages(prevState => [newMessage, ...prevState]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MessageList messages={messages} />
      <Composer onSend={handleOnSend} />
    </SafeAreaView>
  );
};
