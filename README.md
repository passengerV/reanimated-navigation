## Dear Reader,

This repository serves as chat application demo for representing strange Reanimated behavior of entering animation inside an animated FlatList:

`SlideInUp` and `SlideInDown` entering animations doesn't respect height constraints once the inverted FlatList contentContainerView is filled with items and the animation won't stop at expected boundary, but will leave the screen at top causing `flying` items. For example, let's have 10 items which fills the whole viewport. Until the viewport isn't filled, the enteringAnimation works as expected. Once the viewport is filled, the strange behavior starts and will stop until the viewport is exchanged with another 10 + 1 elements.

## Notes:

- As chat applications usually does have chat rooms with messages from previous interaction, enteringAnimation is delegated to items by a criteria. The criteria is that chat message has to be earlier in time as the chat was opened (so we doesn't want to animate chat messages from past entering the screen, but only the newly added ones).
- Issues are mainly encountered on iOS, but Android seems to be affected as well.
- `itemLayoutAnimation` property of Animated.FlatList doesn't affect the issue.

## Reproduction footage:

- [can be found here](https://drive.google.com/file/d/1Ql-M5Ff6LLjoQmrpQhyJGS9jtnhvvOw9/view?usp=sharing).

## How to run the project:

1. Have ready React Native environment for application development.
2. In the console enter the `yarn build` command. It will install dependencies.
3. After that Metro bundler can be started with `yarn start` command.
4. In another terminal build the projects for Android and/or iOS emulators/simulators with `yarn android` and `yarn ios` commands.
