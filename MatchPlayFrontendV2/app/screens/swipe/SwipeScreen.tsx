import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Animated,
  PanResponder,
  Dimensions,
} from "react-native";
import React, {
  useContext,
  useEffect,
  useState,
  useLayoutEffect,
  useRef,
  useCallback,
} from "react";
import { UserType } from "../../UserContext";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { useRoute } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const SwipeScreen = ({ navigation }) => {
  const route = useRoute();
  const { potentialMatch } = route.params;
  const { userId, setUserId } = useContext(UserType);
  const [users, setUsers] = useState(potentialMatch);
  let topIndex = 0;
  let like = 0;

  useEffect(() => {
    // TRY TO GET THIS TO WORK
    /* console.log(potentialMatch.length);
    if (!potentialMatch.length) {
      console.log("waaa");
      navigation.navigate("HomeScreen");
    } */
    if (!users.length) {
      navigation.navigate("GenCompScreen");
    }
  }, [users.length]);

  const swipe = useRef(new Animated.ValueXY()).current;
  const titleSign = useRef(new Animated.Value(1)).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,

    onPanResponderMove: (_, { dx, dy, y0 }) => {
      swipe.setValue({ x: dx, y: dy });
      titleSign.setValue(y0 > (height * 0.9) / 2 ? 1 : -1);
    },

    onPanResponderRelease: (_, { dx, dy }) => {
      const direction = Math.sign(dx);
      const isActionActive = Math.abs(dx) > 100;

      if (isActionActive) {
        // Swipe the card off the screen
        /* Animated.timing(swipe, {
          duration: 500,
          toValue: {
            x: direction * 500,
            y: dy,
          },
          useNativeDriver: true,
        }).start(removeTopCard); */
        handleChoice(direction);
      } else {
        // Return the card to original positions
        Animated.spring(swipe, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });

  const topCardData = () => {
    const topCard = potentialMatch[topIndex++];
    addLike(topCard._id, like);
  };

  const removeTopCard = useCallback(() => {
    setUsers((prevState) => prevState.slice(1));
    swipe.setValue({ x: 0, y: 0 });
    topCardData();
  }, [swipe]);

  const handleChoice = useCallback(
    (direction) => {
      like = direction;
      Animated.timing(swipe.x, {
        toValue: direction * 500,
        duration: 400,
        useNativeDriver: true,
      }).start(removeTopCard);
    },
    [removeTopCard, swipe.x]
  );

  const addLike = async (recepientId, like) => {
    try {
      let link;
      if (like == 1) {
        link = `http://localhost:3000/likes/${userId}/${recepientId}/like`;
      } else if (like == -1) {
        link = `http://localhost:3000/likes/${userId}/${recepientId}/dislike`;
      }

      const response = await fetch(link);
      console.log(link);
    } catch (error) {
      console.log("error adding like/dislike", error);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Match Play</Text>
      ),
      headerRight: () => (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Ionicons
            onPress={() => navigation.navigate("ChatScreen")}
            name="chatbox-ellipses-outline"
            size={24}
            color="black"
          />
        </View>
      ),
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      {users
        .map(({ name }, index) => {
          const isFirst = index == 0;
          const dragHandlers = isFirst ? panResponder.panHandlers : {};
          return (
            <Card
              key={name}
              name={name}
              image={require("../../assets/golfer.jpeg")}
              isFirst={isFirst}
              swipe={swipe}
              titleSign={titleSign}
              {...dragHandlers}
            />
          );
        })
        .reverse()}
      <Footer handleChoice={handleChoice} />
    </View>
  );
};

export default SwipeScreen;
