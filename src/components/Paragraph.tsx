import React from 'react';
import { Text } from 'react-native';
import { styles } from '@styles/index';
import { useTheme } from '@react-navigation/native';

type ParagraphProps = {
  children: React.ReactNode;
  style?: any;
};

export default function Paragraph({ children, style }: ParagraphProps) {
  const { colors } = useTheme();
  return <Text style={[styles.p, { color: "white" }, style]}>{children}</Text>;
}
