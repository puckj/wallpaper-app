import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  OnBoardingScreen: undefined;
  HomeScreen: undefined;
  ItemScreen: { itemId: number };
};

export type RootStackNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>; // for useNavigation in RootStackNavigator

export type ItemScreenRouteProp = RouteProp<RootStackParamList, "ItemScreen">; // for useRoute() on ItemScreen.tsx
