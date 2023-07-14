import React from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import CardItem from "./CardItem";

const MasonryLayout = ({ data }) => {
  return (
    <MasonryList
      data={data}
      keyExtractor={(item) => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <CardItem data={item} />}
    />
  );
};

export default MasonryLayout;
