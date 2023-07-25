import {Platform} from 'react-native';

export interface ChatMessage {
  _id: string;
  text?: string;
  createdAt: Date | number;
}

export const EMPTY_ARRAY = [];
export const ENTERING_ANIMATION_CHAT_ID = '0';
export const LAYOUT_ANIMATION_CHAT_ID = '1';
export const IS_IOS = Platform.OS === 'ios';
