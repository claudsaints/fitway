import React from 'react';
import { Text } from 'react-native';
import { styles } from '@styles/index';
import { useTheme } from '@react-navigation/native';

type TitleProps = {
  children: React.ReactNode;
  variant?: 'h1' | 'h2';
  style?: any;
};

export default function Title({ children, variant = 'h1', style }: TitleProps) {
  const { colors } = useTheme();
  return (
    <Text
      style={[
        variant === 'h1'
          ? [styles.h1, { color: colors.h1 }]
          : [styles.h2, { color: colors.h2 }],
        style,
      ]}
    >
      {children}
    </Text>
  );
}
