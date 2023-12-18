import { useEffect } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function MyAppointments({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerTintColor: "slateblue",
      headerTitleAlign: "center",
    });
  }, []);
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        keyExtractor={(Item, index) => index}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              width: "90%",
              alignItems: "center",
              padding: 10,
              marginTop: 15,
              backgroundColor: "white",
              borderRadius: 10,
              alignSelf: "center",
            }}
          >
            <View style={{ width: "100%" }}>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Image
                    style={{ height: 40, width: 40 }}
                    source={require("../../icons/my-doctors.png")}
                  />
                </View>
                <View style={{ paddingLeft: 20, gap: 5 }}>
                  <Text style={{ fontSize: 18 }}>Dr. Azan Abdullah</Text>
                  <Text style={{ color: "blue", fontSize: 15 }}>Faizan</Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Image
                        style={{ height: 15, width: 15 }}
                        source={require("../../icons/calendar.png")}
                      />
                      <Text style={{ paddingLeft: 5 }}>03:43 PM</Text>
                    </View>
                    <View style={{ paddingLeft: 20 }}>
                      <Text>March 02, 2022</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={{ height: 15, width: 15 }}
                      source={require("../../icons/zoom.png")}
                    />
                    <Text style={{ paddingLeft: 6 }}>Video Call</Text>
                  </View>
                  <View style={{ alignItems: "flex-end" }}>
                    <Text style={{ color: "red", fontStyle: "italic" }}>
                      Cancelled
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const DATA = [
  {
    doctor: "Dr. Muhammad Nouman Anjum",
    patient: "Ali",
    time: "03:43 PM",
    date: "March 02, 2022",
  },
  {
    doctor: "Dr. Mujahid Israr",
    patient: "Ali",
    time: "12:15 PM",
    date: "June 20, 2022",
  },
  {
    doctor: "Dr. Muhammad Nabeel Akram",
    patient: "Ali",
    time: "05:02 PM",
    date: "September 13, 2022",
  },
  {
    doctor: "Dr. Syed Nouman Kazmi",
    patient: "Ali",
    time: "10:13 PM",
    date: "February 05, 2022",
  },
];
