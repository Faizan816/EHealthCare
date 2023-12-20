// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { StatusBar } from "expo-status-bar";
// import { useEffect, useState } from "react";
// import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// function Button({ color, title, navigate }) {
//   return (
//     <View style={styles.buttonContainer}>
//       <TouchableOpacity
//         style={{
//           alignItems: "center",
//           backgroundColor: color,
//           padding: 10,
//           borderRadius: 10,
//         }}
//         onPress={navigate}
//       >
//         <Text style={styles.buttonText}>{title}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function Logo({ title }) {
//   return (
//     <View style={styles.logoContainer}>
//       <Text style={styles.logo}>{title}</Text>
//     </View>
//   );
// }

// export default function HomeScreen({ navigation }) {
//   const [rendered, setRendered] = useState(false); // State to control rendering

//   useEffect(() => {
//     AsyncStorage.setItem("screen", "Home");
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Logo title="E-Healthcare Management System" />
//       <Button
//         color="rgb(39, 0, 93)"
//         title="Admin"
//         navigate={() => navigation.navigate("Admin")}
//       />
//       <Button
//         color="rgb(148, 0, 255)"
//         title="Patient"
//         navigate={() => navigation.navigate("Patient")}
//       />
//       <Button
//         color="rgb(100, 204, 197)"
//         title="Doctor"
//         navigate={() => navigation.navigate("Doctor")}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   logoContainer: {
//     flex: 0.5,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 5,
//   },
//   logo: {
//     fontSize: 40,
//     color: "purple",
//     fontWeight: "500",
//   },
//   buttonContainer: {
//     flex: 0.1,
//     padding: 5,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   button: {
//     alignItems: "center",
//     backgroundColor: "rgb(89, 115, 145)",
//     padding: 10,
//     borderRadius: 10,
//   },
//   buttonText: {
//     fontSize: 25,
//     color: "white",
//   },
// });
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

<<<<<<< HEAD
// function Button({ color, title, text, navigate }) {
//   return (
//     <View style={styles.buttonContainer}>
//       <Text
//         style={{
//           fontSize: 18,
//           fontWeight: "bold",
//           color: "black",
//           padding: 35,
//           paddingBottom: 5,
//           paddingTop: 10,
//         }}
//       >
//         {text}
//       </Text>
//       <TouchableOpacity
//         style={[styles.button, { backgroundColor: color }]}
//         onPress={navigate}
//       >
//         <Text style={styles.buttonText}>{title}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
=======
function Button({ color, title, text, navigate }) {
  return (
    <View style={styles.buttonContainer}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "black",
          padding: 35,
          paddingBottom: 5,
          paddingTop: 10,
        }}
      >
        {text}
      </Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: color }]}
        onPress={navigate}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
>>>>>>> 3e9eb209913b07a17a150b44dc7e2ef2f3b0b0d8

function Logo({ title }) {
  return (
    <View style={styles.logoContainer}>
      <MaterialCommunityIcons
        name="hospital-box-outline"
        size={45}
<<<<<<< HEAD
        color="white"
=======
        color="black"
>>>>>>> 3e9eb209913b07a17a150b44dc7e2ef2f3b0b0d8
      />
      <Text style={styles.logo}>{title}</Text>
    </View>
  );
}

export default function HomeScreen({ navigation }) {
  // useEffect(() => {
  //   AsyncStorage.setItem("screen", "Home");
  // }, []);

  return (
    <View style={styles.container}>
      <Logo title="E-Healthcare" />
<<<<<<< HEAD

      {/* <Button
=======
      <Button
        color="rgb(39, 0, 93)"
        title="Admin"
        text="Are you an admin? Click here"
        navigate={() => navigation.navigate("Admin")}
      />
      <Button
>>>>>>> 3e9eb209913b07a17a150b44dc7e2ef2f3b0b0d8
        color="rgb(148, 0, 255)"
        title="Patient"
        text="Are you a patient? Click here"
        navigate={() => navigation.navigate("Patient")}
      />
      <Button
        color="rgb(0, 135, 172)"
        title="Doctor"
        text="Are you a doctor? Click here"
<<<<<<< HEAD
        navigate={() => navigation.navigate("DoctorRegister")}
      /> */}
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
        Continue as:
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Patient")}
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: "rgb(149,29,29)",
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 10,
          marginTop: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Patient</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("DoctorRegister")}
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: "rgb(39,116, 47)",
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 10,
          marginTop: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Doctor</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Have any query?</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate("Contact Us");
        }}
      >
=======
        navigate={() => navigation.navigate("Doctor")}
      />

      <Text style={styles.text}>Have any query?</Text>
      <TouchableOpacity style={styles.btn}>
>>>>>>> 3e9eb209913b07a17a150b44dc7e2ef2f3b0b0d8
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: "rgb(95, 41, 41)",
=======
    backgroundColor: "#fff",
>>>>>>> 3e9eb209913b07a17a150b44dc7e2ef2f3b0b0d8
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "rgb(0, 122, 255)", // Customize the color as needed
    padding: 15,
    borderRadius: 10,
    width: "70%",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 80,
<<<<<<< HEAD
    color: "white",
=======
>>>>>>> 3e9eb209913b07a17a150b44dc7e2ef2f3b0b0d8
  },
  logoContainer: {
    flex: 0.35,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginBottom: 4,
    // backgroundColor:"blue"
  },
  logo: {
    fontSize: 40,
<<<<<<< HEAD
    color: "white",
=======
    color: "purple",
>>>>>>> 3e9eb209913b07a17a150b44dc7e2ef2f3b0b0d8
    fontWeight: "500",
    padding: 10,
  },
  buttonContainer: {
    margin: 10,
    // width: "100%",
    alignItems: "center",
    padding: 8,
    borderWidth: 1.5,
    width: "85%",
    borderRadius: 20,
  },
  button: {
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    // marginLeft: 250,
    // marginTop:10,
    width: "30%",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
});
