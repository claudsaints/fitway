import React from 'react';
import { Text } from 'react-native';
import { styles } from '@styles/index';

type TitleProps = {
  children: React.ReactNode;
  variant?: 'h1' | 'h2';
  style?: any;
};

export default function Title({ children, variant = 'h1', style }: TitleProps) {
  return (
    <Text style={[variant === 'h1' ? styles.h1 : styles.h2, style]}>{children}</Text>
  );
}
