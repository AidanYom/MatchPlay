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

const { width, height } = Dimensions.get("screen");

const SwipeScreen = ({ navigation }) => {
  const [potentialMatch, setPotentialMatch] = useState();
  const { userId, setUserId } = useContext(UserType);

  useEffect(() => {
    setUserId("660f11e2b13eaea0ac834367");
  });

  /* useEffect(() => {
    const compatibleUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/users/${userId}/compatible`
        );
        const data = await response.json();

        if (response.ok) {
          setPotentialMatch(data);
        }
      } catch (error) {
        console.log("Error showing other users", error);
      }
    };

    compatibleUser();
  }, []); */

  useEffect(() => {
    const compatibleUsers = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/users/${userId}/compatible/multiple`
        );

        console.log(response.ok);

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setPotentialMatch(data);
        }
      } catch (error) {
        console.log("Error", error);
      }
    };
    compatibleUsers();
  }, []);

  const things = [
    { name: "Adam He", image: require("../../assets/golfer.jpeg") },
    { name: "Alex Yan", image: require("../../assets/golfer.jpeg") },
  ];

  const [users, setUsers] = useState(things);

  useEffect(() => {
    if (!users.length) {
      setUsers(things);
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
        Animated.timing(swipe, {
          duration: 500,
          toValue: {
            x: direction * 500,
            y: dy,
          },
          useNativeDriver: true,
        }).start(removeTopCard);
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

  const removeTopCard = useCallback(() => {
    setUsers((prevState) => prevState.slice(1));
    swipe.setValue({ x: 0, y: 0 });
  }, [swipe]);

  const handleChoice = useCallback(
    (direction) => {
      Animated.timing(swipe.x, {
        toValue: direction * 500,
        duration: 400,
        useNativeDriver: true,
      }).start(removeTopCard);
    },
    [removeTopCard, swipe.x]
  );

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
