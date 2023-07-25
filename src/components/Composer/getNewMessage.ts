import {ChatMessage} from '../../shared';

export const getNewMessage = (content: number): ChatMessage => {
  return {
    _id: `${new Date().getTime()}`,
    createdAt: new Date().getTime(),
    text: `Message ${content}`,
  };
};
