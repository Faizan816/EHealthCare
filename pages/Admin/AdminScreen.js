import { View, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AdminScreen({ navigation }) {
  useEffect(() => {
    AsyncStorage.setItem("screen", "Admin");
  }, []);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginClick() {
    if (username === "admin" && password === "123") {
      alert("Login Successful");
      navigation.navigate("Movies");
      return;
    }
    alert("Login Failed! Enter correct credentials.");
  }

  return (
    <View style={styles.layoutContainer}>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: 80 }}
      >
        <Heading
          flex={0.2}
          align="flex-end"
          size={40}
          text="Login"
          color="purple"
        />
        <Heading
          flex={0.3}
          align="flex-top"
          size={40}
          text="Admin Panel"
          color="green"
        />
        <View style={{ paddingTop: 100 }}>
          <Input
            label="Username:"
            value={username}
            onChange={(value) => setUsername(value)}
          />
          <Input
            label="Password:"
            hidden={true}
            value={password}
            onChange={(value) => setPassword(value)}
          />

          <View style={styles.footerContainer}>
            <Footer>
              <Button
                title="Login"
                backgroundColor="purple"
                action={handleLoginClick}
              />
              <Button
                title="Cancel"
                backgroundColor="rgb(89, 115, 145)"
                action={() => navigation.navigate("Home")}
              />
            </Footer>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    padding: 15,
  },
  footerContainer: {
    flex: 0.3,
    paddingTop: 40,
    justifyContent: "flex-end",
  },
});
