import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  OnBoardingScreen: undefined;
  HomeScreen: undefined;
  ItemsScreen: { itemId: string; itemName: string };
  ItemScreen: { itemId: string };
};

export type RootStackNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>; // for useNavigation in RootStackNavigator

export type ItemsScreenRouteProp = RouteProp<RootStackParamList, "ItemsScreen">; // for useRoute() on ItemsScreen.tsx
export type ItemScreenRouteProp = RouteProp<RootStackParamList, "ItemScreen">; // for useRoute() on ItemScreen.tsx
