import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../navigation/types";
import { StatusBar } from "expo-status-bar";

const OnBoardingScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <>
      <StatusBar style="light" />
      <View className="flex-1 items-center justify-center bg-[#04020d] relative">
        <Image
          source={require("../assets/images/bg.png")}
          className="w-full h-full object-cover"
        />
        <SafeAreaView className="absolute">
          <View className="w-full flex">
            <Text className="text-xl text-[#f6e8e1]">Mobile</Text>
            <Text className="text-[48px] text-white tracking-wider font-bold">
              4K Wallpaper
            </Text>
          </View>
          <View className="w-full px-3 mt-80">
            <TouchableOpacity
              onPress={() => navigation.navigate("HomeScreen")}
              className="bg-[#E1A334] p-4 flex-row items-center justify-center rounded-full"
            >
              <Text className="text-[#6F0F00] text-xl font-bold">
                Get Started !
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default OnBoardingScreen;
