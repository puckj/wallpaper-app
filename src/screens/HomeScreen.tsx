import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import MasonryLayout from "../components/MasonryLayout";
import { getCategory } from "../services/sanity";

const HomeScreen = () => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    getCategory()
      .then((data) => {
        // console.log(data);
        setCategories(data);
      })
      .catch((err) => {
        alert(err);
        console.error("error from getCategory() [HomeScreen.tsx] >> ", err);
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
          {categories ? (
            <MasonryLayout data={categories} screen="ItemsScreen" />
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

export default HomeScreen;
