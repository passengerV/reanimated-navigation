import {isAfter} from 'date-fns';
import {SlideInUp} from 'react-native-reanimated';

export const getEnteringAnimation = (
  parentInitializedAt?: number,
  messageCreatedAt?: number | Date,
) => {
  if (!parentInitializedAt || !messageCreatedAt) {
    return undefined;
  }

  const isEnteringAnimationVisible = isAfter(
    messageCreatedAt,
    parentInitializedAt,
  );

  return isEnteringAnimationVisible ? SlideInUp : undefined;
};
