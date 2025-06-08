import React from 'react';
import { Text } from 'react-native';
import { styles } from '@styles/index';

type ParagraphProps = {
  children: React.ReactNode;
  style?: any;
};

export default function Paragraph({ children, style }: ParagraphProps) {
  return <Text style={[styles.p, style]}>{children}</Text>;
}
