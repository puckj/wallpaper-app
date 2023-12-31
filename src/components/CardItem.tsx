import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { RootStackNavigationProp } from "../navigation/types";
import { urlFor } from "../services/sanity";

const CardItem = ({ data, screen }: any) => {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(screen, {
          itemId: data._id,
          itemName: data.title,
        })
      }
      style={{ height: Math.round(Math.random() * 100 + 200) }}
      className="bg-[#111] m-1 rounded-md relative overflow-hidden"
    >
      <Image
        source={{ uri: urlFor(data.image).url() }}
        className="w-full h-full object-cover"
      />
    </TouchableOpacity>
  );
};

export default CardItem;
