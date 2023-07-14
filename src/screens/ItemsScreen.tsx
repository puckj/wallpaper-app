import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ItemsScreenRouteProp } from "../navigation/types";
import { useRoute } from "@react-navigation/native";
import { getCategoryItemsById } from "../services/sanity";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import MasonryLayout from "../components/MasonryLayout";

const ItemsScreen = () => {
  const { params } = useRoute<ItemsScreenRouteProp>();
  const [items, setItems] = useState(null);
  useEffect(() => {
    getCategoryItemsById(params.itemId)
      .then((data) => {
        console.log(data);
        setItems(data);
      })
      .catch((err) => {
        console.error(
          "error from getCategoryItemsById() [ItemsScreen.tsx] >> ",
          err
        );
      });
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-[#04020d] relative">
      <SafeAreaView className="flex w-full h-full items-center justify-start gap-4">
        <View className="w-full px-6 flex-row items-center justify-between">
          <Text className="text-2xl text-gray-50 font-semibold">
            4K Wallpaper
          </Text>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <ScrollView className="w-full h-full px-4">
          {items ? (
            <MasonryLayout data={items} screen="ItemScreen" />
          ) : (
            <>
              <ActivityIndicator color="#ff0000" size="large" />
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ItemsScreen;
