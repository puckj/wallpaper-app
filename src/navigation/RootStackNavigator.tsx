import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ItemScreen, OnBoardingScreen } from "../screens";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
