import {DimensionValue} from 'react-native';

export const getRandomWidth = (min: number, max: number): DimensionValue => {
  const width = Math.floor(Math.random() * (max - min + 1) + min);
  return `${width}%`;
};
