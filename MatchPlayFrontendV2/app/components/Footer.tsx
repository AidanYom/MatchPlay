import { View, Text } from "react-native";
import React from "react";
import Button from "./Button";

const COLORS = {
  like: "#00eda6",
  dislike: "#ff006f",
};
const Footer = ({ handleChoice }) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 15,
        width: 240,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: -999,
      }}
    >
      <Button
        name="times"
        size={24}
        color={COLORS.dislike}
        style={undefined}
        onPress={() => handleChoice(-1)}
      />
      <Button
        name="heart"
        size={24}
        color={COLORS.like}
        style={undefined}
        onPress={() => handleChoice(1)}
      />
    </View>
  );
};

export default Footer;
