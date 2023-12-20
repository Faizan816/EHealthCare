import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function Heading({ text, color, size, flex, align }) {
  return (
    <View
      style={{
        flex: flex,
        justifyContent: align,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: size, color: color }}>{text}</Text>
    </View>
  );
}
