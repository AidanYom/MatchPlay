import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import React, { Fragment, useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { UserContext } from "../UserContext";
import Choice from "./Choice";

const { width, height } = Dimensions.get("screen");

const Card = ({ name, image, isFirst, swipe, titleSign, ...rest }) => {
  const rotate = Animated.multiply(swipe.x, titleSign).interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ["8deg", "0deg", "-8deg"],
  });

  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), { rotate }],
  };

  const likeOpacity = swipe.x.interpolate({
    inputRange: [25, 100],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const dislikeOpacity = swipe.x.interpolate({
    inputRange: [-100, -25],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const renderChoice = useCallback(() => {
    return (
      <Fragment>
        <Animated.View
          style={[
            styles.choiceContainer,
            styles.likeContainer,
            { opacity: likeOpacity },
          ]}
        >
          <Choice type="like" />
        </Animated.View>
        <Animated.View
          style={[
            styles.choiceContainer,
            styles.dislikeContainer,
            { opacity: dislikeOpacity },
          ]}
        >
          <Choice type="dislike" />
        </Animated.View>
      </Fragment>
    );
  }, [likeOpacity, dislikeOpacity]);
  return (
    <Animated.View
      style={[styles.container, isFirst && animatedCardStyle]}
      {...rest}
    >
      <Image source={image} style={styles.image} />
      <LinearGradient
        colors={["transparent", "rbga(0,0,0,.9)"]}
        style={styles.gradient}
      >
        <View style={styles.userContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </LinearGradient>
      {isFirst && renderChoice()}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
  },
  image: {
    width: width * 0.9,
    height: height * 0.78,
    borderRadius: 20,
    resizeMode: "contain",
  },
  gradient: {
    position: "absolute",
    bottome: 0,
    left: 0,
    right: 0,
    height: 550,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  userContainer: {
    position: "absolute",
    bottom: 24,
    left: 24,
  },
  name: {
    fontSize: 30,
    color: "black",
    fontWeight: "400",
  },
  choiceContainer: {
    position: "absolute",
    top: 100,
  },
  likeContainer: {
    left: 45,
    transform: [{ rotate: "-30 deg" }],
  },
  dislikeContainer: {
    right: 45,
    transform: [{ rotate: "30 deg" }],
  },
});

export default Card;
