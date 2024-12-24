import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import ImageCard from "./imageCard";
import { wp } from "../helpers/common";

const ImageGrid = ({ images, router }) => {
  return (
    <View>
      <MasonryList
        data={images}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainerStyle}
        renderItem={({ item, index }) => (
          <ImageCard item={item} index={index} router={router} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 3,
    width: wp(100),
  },
  listContainerStyle: {
    paddingHorizontal: wp(4),
  },
});

export default ImageGrid;
