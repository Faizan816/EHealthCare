import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { apiHook } from "../customHooks/Api";
import { useEffect } from "react";

export default function Users() {
  const { data, getData } = apiHook();
  useEffect(() => {
    getData("https://reactnative.dev/movies.json");
  }, []);
  return (
    <View style={styles.layoutContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              height: 80,
              marginBottom: 30,
              backgroundColor: "lightgrey",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
            }}
          >
            {/* <View style={{ flex: 0.25 }}>
              <Image
                style={{
                  width: 66,
                  height: 66,
                  borderRadius: 150 / 2,
                  overflow: "hidden",
                  borderWidth: 3,
                  borderColor: "red",
                  marginLeft: 10,
                }}
                source={{
                  uri: item.imgSrc,
                }}
              />
            </View> */}
            <View
              style={{
                flex: 0.5,
              }}
            >
              <Text> {item.title} </Text>
              <Text> {item.releaseYear} </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    padding: 15,
  },
});

const USERS = [
  {
    id: 1,
    name: "Faizan",
    email: "faizan@gmail.com",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    age: 22,
  },
  {
    id: 2,
    name: "Ali",
    email: "ali@gmail.com",
    imgSrc:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    age: 26,
  },
  {
    id: 3,
    name: "Kamran",
    email: "kamran@gmail.com",
    imgSrc:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    age: 32,
  },
];
