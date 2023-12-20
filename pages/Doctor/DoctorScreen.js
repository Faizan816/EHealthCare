// import { View, StyleSheet, ScrollView } from "react-native";
// import { useState, useEffect } from "react";
// import Heading from "../../components/Heading";
// import Input from "../../components/Input";
// import Button from "../../components/Button";
// import Footer from "../../components/Footer";
// import SignupLink from "../../components/SignupLink";

// export default function DoctorScreen({ navigation }) {

//   return (
//     <View style={styles.layoutContainer}>
//       <ScrollView
//         vertical
//         showsVerticalScrollIndicator={false}
//         style={{ paddingTop: 80 }}
//       >
//         <Heading
//           flex={0.2}
//           align="flex-end"
//           size={40}
//           text="Login"
//           color="purple"
//         />
//         <Heading
//           flex={0.3}
//           align="flex-top"
//           size={40}
//           text="Doctor Panel"
//           color="green"
//         />
//         <View style={{ paddingTop: 100 }}>
//           <Input
//             label="Username:"
//             value={username}
//             onChange={(value) => setUsername(value)}
//           />
//           <Input
//             label="Password:"
//             hidden={true}
//             value={password}
//             onChange={(value) => setPassword(value)}
//           />
//           <SignupLink onPress={() => navigation.navigate("DoctorRegister")} />
//           <View style={styles.footerContainer}>
//             <Footer>
//               <Button
//                 title="Login"
//                 backgroundColor="purple"
//                 action={handleLoginClick}
//               />
//               <Button
//                 title="Cancel"
//                 backgroundColor="rgb(89, 115, 145)"
//                 action={() => navigation.navigate("Home")}
//               />
//             </Footer>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   layoutContainer: {
//     flex: 1,
//     padding: 15,
//   },
//   footerContainer: {
//     flex: 0.3,
//     justifyContent: "flex-end",
//     paddingTop: 40,
//   },
// });
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
  onAuthStateChanged,
} from "firebase/auth";


const doctors = [
  {
    username: "Akram",
    password: "111",
  },
  {
    username: "Babar",
    password: "222",
  },
  {
    username: "Shakeel",
    password: "333",
  },
];

function Logo({ title }) {
  return (
    <View style={styles.logoContainer}>
      <MaterialCommunityIcons
        name="hospital-box-outline"
        size={45}
        color="black"
      />
      <Text style={styles.logo}>{title}</Text>
    </View>
  );
}

const DoctorScreen = ({ navigation }) => {
  useEffect(() => {
    AsyncStorage.removeItem("screen");
    AsyncStorage.setItem("screen", "Doctor");
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const handleLoginClick=async () =>{
    // let isSuccessful = false;
    // doctors.forEach((doctor) => {
    //   if (doctor.username === username && doctor.password === password) {
    //     alert("Login Successful");
    //     isSuccessful = true;
    //     navigation.navigate("Appointment Request");
    //     AsyncStorage.setItem("loggedIn", "true");
    //   }
    // });
    // if (!isSuccessful) alert("Login Failed! Enter correct credentials.");
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // console.log("user data,", user);
      console.log("user data,", user);
      // ...
      alert("Login successful");
      navigation.navigate("DoctorHomePage");

      // AsyncStorage.setItem("myuser", JSON.stringify(user));
      // navigation.navigate('HomeScreen');
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log("Error,", errorMessage);
      alert(errorMessage);
      // ..
    });
  }

  return (
    <ImageBackground
      source={{ uri: "https://wallpaperaccess.com/full/3275630.jpg" }} // Replace with the actual URL of your image
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <StatusBar></StatusBar>
          <Logo title="Doctor" />
          <View style={styles.formContainer}>
            {/* <Text style={{fontSize:30,color:"rgb(54, 116, 137)",marginBottom:20,fontWeight:"bold"}}>Create Account</Text> */}
            <TextInput
              style={styles.input}
              placeholder="email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TouchableOpacity
              onPress={handleLoginClick}
              style={{
                backgroundColor: "rgb(120, 153, 177)",
                alignItems: "center",
                padding: 12,
                borderRadius: 12,
                opacity: 0.8,
              }}
            >
              <Text style={styles.btn}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.licenseContainer}
              onPress={() => alert("Read User License Agreement")}
            >
              <Text style={styles.license}>Read User License Agreement</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    // overflow:"hidden",
    justifyContent: "center",
    // opacity:"1"
  },
  container: {
    flex: 1,
    // backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
    borderRadius: 8,
    elevation: 4,
    marginHorizontal: 20,
    padding: 20,
  },
  formContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  btn: {
    fontSize: 22,
    // marginBottom: 20,
    textAlign: "center",
    color: "white",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
    fontSize: 18,
    color: "black",
    backgroundColor: "rgba(189, 226, 253, 0.7)",
  },
  // checkboxContainer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   marginBottom: 16,
  // },
  label: {
    marginLeft: 8,
  },
  licenseContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  license: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    marginTop: -15,
  },
  logoContainer: {
    // flex: 0.8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    marginTop: 100,
  },
  logo: {
    fontSize: 40,
    color: "rgb(118, 139, 150)",
    fontWeight: "bold",
    padding: 10,
  },
});

export default DoctorScreen;
