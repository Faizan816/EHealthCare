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

export default function ({ navigation, route }) {
  const [filter, setFilter] = useState("");
  const doctors = DOCTORS.filter(
    (item) => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  );
  const { symptomData } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: symptomData.name,
      headerTitleAlign: "center",
    });
  }, []);

  return (
    <SafeAreaView style={{ paddingBottom: 20 }}>
      <Search filter={filter} setFilter={setFilter} />
      <FlatList
        keyExtractor={(item, i) => item + i}
        data={doctors}
        renderItem={({ item }) => (
          <View>
            <View
              style={{
                flexDirection: "row",
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20,
              }}
            >
              <View>
                <Image
                  style={{ width: 40, height: 55 }}
                  source={require("../../icons/my-doctors.png")}
                />
              </View>
              <View style={{ paddingLeft: 10 }}>
                <Text
                  style={{
                    color: "blue",
                    textDecorationLine: "underline",
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>
                <Text style={{ color: "blue" }}>{item.speciality}</Text>
                <Text>{item.study}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 10,
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={{ color: "blue" }}>Patients</Text>
                <Text style={{ textAlign: "center" }}>{item.patients}</Text>
              </View>
              <View>
                <Text style={{ color: "blue" }}>Experience</Text>
                <Text style={{ textAlign: "center" }}>{item.Experience}</Text>
              </View>
              <View>
                <Text style={{ color: "blue" }}>Satisfaction</Text>
                <Text style={{ textAlign: "center" }}>{item.Satisfaction}</Text>
              </View>
            </View>
            <View style={{ padding: 20 }}>
              <TouchableOpacity
                onPress={() => {
                  if (route.params.symptomData.name === "Add Doctor")
                    navigation.navigate("My Doctors", {
                      doctorData: {
                        name: item.name,
                        speciality: item.speciality,
                      },
                    });
                }}
                style={{
                  backgroundColor: "rgb(64, 62, 175)",
                  borderRadius: 10,
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {route.params.symptomData.name === "Add Doctor"
                    ? "Add Doctor"
                    : "Book Appointment"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
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
            placeholder="Search"
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

const DOCTORS = [
  {
    name: "Prof. Dr. Abdul Razaq",
    speciality: "General Physician",
    study: "MBBS, MCPS, FCPS, CRSM",
    patients: "47+",
    Experience: "38 Years",
    Satisfaction: "100%",
  },
  {
    name: "Dr, Muhammad Taimour",
    speciality: "Pulmonologist",
    study: "MBBS, DTCD",
    patients: "788+",
    Experience: "45 Years",
    Satisfaction: "95%",
  },
  {
    name: "Dr. Syed Nouman Kazmi",
    speciality: "Cardiologist",
    study: "MBBS, FCPS",
    patients: "56+",
    Experience: "11 Years",
    Satisfaction: "97%",
  },
  {
    name: "Dr. Muhammad Nabeel Akbar",
    speciality: "Interventional Cardiologist",
    study: "MBBS, FCPS (Cardiology)",
    patients: "107+",
    Experience: "14 Years",
    Satisfaction: "99%",
  },
];
