import Navigation from "./navigation";
import useCustomFonts from "./hooks/useCustomFonts";
import ThemeProvider from "./providers/themeProvider";
import { Text } from "react-native";
export default function App() {
  const [fontsLoaded] = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}
