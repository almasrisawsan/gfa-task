import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import PostScreen from "../screens/PostScreen";
import { COLORS } from "../constants";

const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: COLORS.BLUE,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        cardStyle: { backgroundColor: COLORS.LIGHTBLUE },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Post" component={PostScreen} />
    </Stack.Navigator>
  );
};
export default HomeStack;
