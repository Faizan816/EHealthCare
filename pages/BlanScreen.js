import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";
import HomeScreen from "./HomeScreen";

export default function BlankScreen({ navigation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    const loggedIn = await AsyncStorage.getItem("loggedIn");
    if (loggedIn == "true") {
      const screen = await getLastScreen();
      if (screen == "Patient") {
        navigation.reset({
          index: 0,
          routes: [{ name: "PatientDashboard" }],
        });
      } else if (screen == "Doctor") {
        navigation.reset({
          index: 0,
          routes: [{ name: "DoctorHomePage" }],
        });
      }
    } else {
      loadHome();
    }
  };

  const getLastScreen = async () => {
    const screen = await AsyncStorage.getItem("screen");
    return screen;
  };

  const loadHome = async () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
    setLoading(false);
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {loading && <ActivityIndicator size="large" color="blue" />}
    </View>
  );
}
