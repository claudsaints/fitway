import { Platform } from "react-native";

const WEB_FONT_STACK =
  'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export const MyThemeLight = {
  dark: false,
  colors: {
    primary: 'black',
    background: '#e1e1e1',
    card: '#fff',
    text: '#777',
    border: '#ccc',
    notification: '#007bff',
   
  },
   fonts: Platform.select({
    web: {
      regular: {
        fontFamily: WEB_FONT_STACK,
        fontWeight: '400',
      },
      medium: {
        fontFamily: WEB_FONT_STACK,
        fontWeight: '500',
      },
      bold: {
        fontFamily: WEB_FONT_STACK,
        fontWeight: '600',
      },
      heavy: {
        fontFamily: WEB_FONT_STACK,
        fontWeight: '700',
      },
    },
    ios: {
      regular: {
        fontFamily: 'System',
        fontWeight: '400',
      },
      medium: {
        fontFamily: 'System',
        fontWeight: '500',
      },
      bold: {
        fontFamily: 'System',
        fontWeight: '600',
      },
      heavy: {
        fontFamily: 'System',
        fontWeight: '700',
      },
    },
    default: {
      regular: {
        fontFamily: 'Roboto_400Regular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'Roboto_400Regular',
        fontWeight: '500',
      },
      bold: {
        fontFamily: 'Roboto_400Regular',
        fontWeight: '600',
      },
      heavy: {
        fontFamily: 'Roboto_400Regular',
        fontWeight: '700',
      },
    },
  }),
};

export const MyThemeDark = {
  dark: true,
  colors: {
    primary: '#fff',
    background: '#181818',
    card: '#222',
    text: '#fff',
    border: '#444',
    notification: '#007bff',
    button: '#fff',
    buttonText: '#000',
    inputBackground: '#222',
    inputBorder: '#444',
    inputText: '#fff',
    inputFocusBorder: '#007bff',
    inputFocusBackground: '#222',
    label: '#ccc',
    error: '#ff3333',
    h1: '#fff',
    h2: '#eee',
    p: '#fff',
  },
  fonts: Platform.select({
    web: {
      regular: {
        fontFamily: WEB_FONT_STACK,
        fontWeight: '400',
      },
      medium: {
        fontFamily: WEB_FONT_STACK,
        fontWeight: '500',
      },
      bold: {
        fontFamily: WEB_FONT_STACK,
        fontWeight: '600',
      },
      heavy: {
        fontFamily: WEB_FONT_STACK,
        fontWeight: '700',
      },
    },
    ios: {
      regular: {
        fontFamily: 'System',
        fontWeight: '400',
      },
      medium: {
        fontFamily: 'System',
        fontWeight: '500',
      },
      bold: {
        fontFamily: 'System',
        fontWeight: '600',
      },
      heavy: {
        fontFamily: 'System',
        fontWeight: '700',
      },
    },
    default: {
      regular: {
        fontFamily: 'Roboto_400Regular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'Roboto_400Regular',
        fontWeight: '500',
      },
      bold: {
        fontFamily: 'Roboto_400Regular',
        fontWeight: '600',
      },
      heavy: {
        fontFamily: 'Roboto_400Regular',
        fontWeight: '700',
      },
    },
  }),
};