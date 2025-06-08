import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { styles } from '@styles/index';

import { StyleProp, TextStyle } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  children: React.ReactNode;
  style?: React.CSSProperties;
  textStyle?: StyleProp<TextStyle>;
};

export default function Button({ children, style,textStyle, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      <Text style={[styles.buttonText, textStyle]} {...rest}>{children}</Text>
    </TouchableOpacity>
  );
}
