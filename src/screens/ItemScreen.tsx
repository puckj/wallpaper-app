import {
  View,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ItemScreenRouteProp,
  RootStackNavigationProp,
} from "../navigation/types";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const ItemScreen = () => {
  const { params } = useRoute<ItemScreenRouteProp>();
  const navigation = useNavigation<RootStackNavigationProp>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(params.itemId, "itemId");
    setIsLoading(false);
  }, []);

  return (
    <View className="flex-1 bg-[#04020d] relative">
      {isLoading ? (
        <>
          <ActivityIndicator color="#ff0000" size="large" />
        </>
      ) : (
        <>
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2023/05/09/07/18/space-7980556_1280.jpg",
            }}
            className="w-full h-full object-cover"
          />
        </>
      )}
      <SafeAreaView className="absolute w-full h-full">
        <TouchableOpacity
          className="pl-7 py-4 w-20"
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={32} color="white" />
        </TouchableOpacity>
        <View className="w-full h-full relative">
          <View className="absolute inset-x-0 px-4" style={{ bottom: "11%" }}>
            <BlurView
              className="p-4 flex-row justify-between items-center"
              intensity={60}
              tint="dark"
            >
              {/* <View
              className="p-4 flex-row justify-between items-center"
              style={{ backgroundColor: "#3B3B3B", opacity: 0.85 }}
            > */}
              <View className="flex gap-3">
                <Text className="text-white text-2xl font-bold">
                  Some title
                </Text>
                <Text className="text-white">Some description</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="cloud-download" size={26} color="white" />
              </TouchableOpacity>
            </BlurView>
            {/* </View> */}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ItemScreen;
