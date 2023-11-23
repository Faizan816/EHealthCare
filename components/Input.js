import { View, Text, TextInput } from "react-native";
import { useState } from "react";

export default function Input({ label, hidden, value, onChange, placeholder }) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "600", color: "gray" }}>
        {label}
      </Text>
      <View style={{ height: 30, marginTop: 5 }}>
        <TextInput
          style={[
            {
              backgroundColor: "white",
              height: 40,
              fontSize: 16,
              padding: 10,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "gray",
              color: "gray",
            },
            isFocused && {
              borderColor: "black",
            },
          ]}
          placeholder={placeholder}
          secureTextEntry={hidden}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          onChangeText={onChange}
        />
      </View>
    </View>
  );
}
