import { Text, View, TouchableOpacity } from "react-native";

export default function SignupLink({ onPress }) {
  return (
    <View style={{ padding: 10 }}>
      <TouchableOpacity onPress={onPress}>
        <Text style={{ color: "blue" }}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}
