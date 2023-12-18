import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useEffect } from "react";

export default function MyDoctors({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerTintColor: "slateblue",
      headerTitleAlign: "center",
      headerStyle: { backgroundColor: "white" },
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            /* Do something when pressed */
          }}
        >
          <Text style={{ color: "slateblue", fontWeight: "500" }}>
            + Add New
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView style={{ padding: 20 }}>
      <FlatList
        data={DOCTORS}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <View
            style={{
              borderWidth: 0.3,
              borderRadius: 10,
              marginBottom: 20,
              backgroundColor: "white",
            }}
          >
            <View style={{ flexDirection: "row", padding: 10 }}>
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../icons/my-doctors.png")}
              ></Image>
              <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontWeight: "900" }}>{item.name}</Text>
                <Text>{item.speciality}</Text>
              </View>
            </View>
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={{
                  borderWidth: 0.3,
                  borderRadius: 10,
                  padding: 5,
                  paddingLeft: 30,
                  paddingRight: 30,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View style={{ paddingRight: 10 }}>
                    <Image
                      style={{ width: 20, height: 20 }}
                      source={require("../../icons/appointments.png")}
                    />
                  </View>
                  <Text>Book Now</Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../../icons/share.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={{ width: 20, height: 20, marginLeft: 20 }}
                    source={require("../../icons/delete-account.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const DOCTORS = [
  {
    name: "Dr. Muhammad Nouman Anjum",
    speciality: "General Physician",
  },
  {
    name: "Dr. Mujahid Israr",
    speciality: "Gastroenterologist",
  },
  {
    name: "Dr. Muhammad Nabeel Akram",
    speciality: "Interventional Cardiologist",
  },
  {
    name: "Dr. Syed Nouman Kazmi",
    speciality: "Cardiologist",
  },
];
