import Navigation from "./navigation";
import useCustomFonts from "./hooks/useCustomFonts";
import ThemeProvider from "./providers/themeProvider";
import PostsProvider from "./providers/postsProvider";

export default function App() {
  const [fontsLoaded] = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <PostsProvider>
        <Navigation />
      </PostsProvider>
    </ThemeProvider>
  );
}
