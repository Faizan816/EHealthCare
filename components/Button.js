import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Button({ title, backgroundColor, action }) {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        backgroundColor: backgroundColor,
        padding: 10,
        height: 50,
        width: 90,
        borderRadius: 10,
      }}
      onPress={action}
    >
      <Text style={{ color: "white", fontSize: 20 }}>{title}</Text>
    </TouchableOpacity>
  );
}
