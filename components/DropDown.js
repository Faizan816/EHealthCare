import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Text, View } from "react-native";

export default function DropDown({
  label,
  items,
  selectedValue,
  handleChange,
}) {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ flex: 1, fontSize: 16, fontWeight: "600" }}>{label}</Text>
      <View style={{ flex: 2, height: 50 }}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <Picker selectedValue={selectedValue} onValueChange={handleChange}>
            {items.map((item) => {
              return <Picker.Item key={item} label={item} value={item} />;
            })}
          </Picker>
        </View>
      </View>
    </View>
  );
}
