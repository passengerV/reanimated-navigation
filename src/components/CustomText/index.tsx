import React, {useMemo} from 'react';
import {Text, TextProps} from 'react-native';
import {getStyles} from './styles';

export interface Props extends TextProps {
  content?: string;
  color?: string;
}

export const CustomText: React.FC<Props> = ({
  content,
  color,
  children,
  ...props
}) => {
  const styles = useMemo(() => getStyles(color), [color]);

  return (
    <Text style={styles.text} {...props}>
      {content || children}
    </Text>
  );
};
