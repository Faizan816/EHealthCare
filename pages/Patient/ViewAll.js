import { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

export default function ({ navigation }) {
  const [filter, setFilter] = useState("");
  const specialities = SPECIALITIES.filter(
    (item) => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Choose Speciality",
      headerTitleAlign: "center",
    });
  }, []);

  return (
    <SafeAreaView>
      <Search filter={filter} setFilter={setFilter} />

      <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}>
        <View style={{ paddingTop: 10 }}>
          <Text style={{ fontWeight: "bold", color: "darkblue" }}>
            Top Specialities
          </Text>
        </View>
        <FlatList
          keyExtractor={(item, i) => item + i}
          data={specialities}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Symptoms", { symptomData: item })
              }
              style={{
                paddingTop: 5,
                flexDirection: "row",
                paddingBottom: 20,
              }}
            >
              <View>
                <Image style={{ height: 40, width: 40 }} source={item.src} />
              </View>
              <View style={{ width: "85%", paddingLeft: 10 }}>
                <Text style={{ color: "darkblue" }}>{item.name}</Text>
                <Text>{item.doctors}</Text>
              </View>
              <View style={{ justifyContent: "center" }}>
                <Text style={{ fontSize: 30, fontWeight: "100" }}>&gt;</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

function Search({ filter, setFilter }) {
  return (
    <View
      style={{
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        height: 30,
      }}
    >
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 9, flexDirection: "row" }}>
          <TextInput
            value={filter}
            onChangeText={(t) => setFilter(t)}
            style={{
              borderWidth: 1,
              width: "100%",
              paddingLeft: 7,
              borderRadius: 5,
              height: 30,
            }}
            placeholder="Search speciality"
          />
        </View>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}
        >
          <TouchableOpacity>
            <Image
              source={require("../../icons/search.png")} // Specify the image source path
              style={{ width: 20, height: 20 }} // Define width and height as needed
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const SPECIALITIES = [
  {
    name: "Dermatologist",
    doctors: "208 Doctors Available",
    src: require("../../icons/dermatologist.png"),
  },
  {
    name: "Urologist",
    doctors: "75 Doctors Available",
    src: require("../../icons/urologist.png"),
  },
  {
    name: "Gastroenterologist",
    doctors: "125 Doctors Available",
    src: require("../../icons/gastroenterologist.png"),
  },
  {
    name: "Pediatrician",
    doctors: "213 Doctors Available",
    src: require("../../icons/pediatrician.png"),
  },
  {
    name: "Gynecologist",
    doctors: "524 Doctors Available",
    src: require("../../icons/gynecologist.png"),
  },
  {
    name: "General Physician",
    doctors: "386 Doctors Available",
    src: require("../../icons/general-physician.png"),
  },
];
