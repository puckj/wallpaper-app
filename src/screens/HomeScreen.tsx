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
        console.log(data);
        setCategories(data);
      })
      .catch((err) => {
        alert(err);
        console.error(err, 'tesst');
      });
  }, []);
  // const data = [
  //   {
  //     id: 1,
  //     name: "Nature",
  //     imageURL:
  //       "https://cdn.pixabay.com/photo/2022/08/17/15/46/labrador-7392840_1280.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Nature",
  //     imageURL:
  //       "https://cdn.pixabay.com/photo/2023/06/10/21/23/flower-8054861_1280.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Nature",
  //     imageURL:
  //       "https://cdn.pixabay.com/photo/2023/06/04/15/51/mountains-8040132_1280.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Nature",
  //     imageURL:
  //       "https://cdn.pixabay.com/photo/2023/03/11/20/01/tree-7845181_1280.jpg",
  //   },
  //   {
  //     id: 5,
  //     name: "Nature",
  //     imageURL:
  //       "https://cdn.pixabay.com/photo/2023/06/08/08/27/plant-8049076_1280.jpg",
  //   },
  //   {
  //     id: 6,
  //     name: "Nature",
  //     imageURL:
  //       "https://cdn.pixabay.com/photo/2022/08/17/15/46/labrador-7392840_1280.jpg",
  //   },
  //   {
  //     id: 7,
  //     name: "Nature",
  //     imageURL:
  //       "https://cdn.pixabay.com/photo/2023/06/10/21/23/flower-8054861_1280.jpg",
  //   },
  //   {
  //     id: 8,
  //     name: "Nature",
  //     imageURL:
  //       "https://cdn.pixabay.com/photo/2023/03/11/20/01/tree-7845181_1280.jpg",
  //   },
  //   {
  //     id: 9,
  //     name: "Nature",
  //     imageURL:
  //       "https://cdn.pixabay.com/photo/2022/08/17/15/46/labrador-7392840_1280.jpg",
  //   },
  //   {
  //     id: 10,
  //     name: "Nature",
  //     imageURL:
  //       "https://cdn.pixabay.com/photo/2023/06/04/15/51/mountains-8040132_1280.jpg",
  //   },
  // ];
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
            <MasonryLayout data={categories} />
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
