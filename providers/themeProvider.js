import { NativeBaseProvider, extendTheme } from "native-base";

const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        colorScheme: "yellow",
      },
      baseStyle: {
        _text: {
          fontWeight: 700,
        },
      },
      sizes: {
        lg: {
          _text: {
            fontSize: 17,
          },
        },
        md: {
          _text: {
            fontSize: 17,
          },
        },
      },
    },
  },
  fontConfig: {
    Montserrat: {
      100: {
        normal: "Montserrat-Thin",
        italic: "Montserrat-ThinItalic",
      },
      200: {
        normal: "Montserrat-ExtraLight",
        italic: "Montserrat-ExtraLightItalic",
      },
      300: {
        normal: "Montserrat-Light",
        italic: "Montserrat-LightItalic",
      },
      400: {
        normal: "Montserrat-Regular",
        italic: "Montserrat-Italic",
      },
      500: {
        normal: "Montserrat-Medium",
        italic: "Montserrat-MediumItalic",
      },
      600: {
        normal: "Montserrat-SemiBold",
        italic: "Montserrat-SemiBoldItalic",
      },
      700: {
        normal: "Montserrat-Bold",
        italic: "Montserrat-BoldItalic",
      },
      800: {
        normal: "Montserrat-ExtraBold",
        italic: "Montserrat-ExtraBoldItalic",
      },
      900: {
        normal: "Montserrat-Black",
        italic: "Montserrat-BlackItalic",
      },
    },
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
    mono: "Montserrat",
  },
});

const ThemeProvider = ({ children }) => {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
};

export default ThemeProvider;
