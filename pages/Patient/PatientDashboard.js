import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useRef, useEffect } from "react";
import {
  Button,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Animated,
  Easing,
  BackHandler,
} from "react-native";

function BottomNavigation() {
  return (
    <View
      style={{
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        backgroundColor: "white", // Set a background color if needed
        width: "100%",
        height: 60, // Adjust the height as needed
        elevation: 5, // Add elevation for a shadow effect (Android)
        shadowColor: "black", // Add shadow properties (iOS)
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      }}
    >
      <View
        style={{
          width: "25%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../icons/home.png")}
          style={{ width: 30, height: 30 }}
        />
        <Text style={{ fontSize: 10, color: "blue" }}>Home</Text>
      </View>
      <TouchableOpacity
        style={{
          width: "25%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../icons/appointment.png")}
          style={{ width: 30, height: 30 }}
        />
        <Text style={{ fontSize: 10 }}>Appointments</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "25%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../icons/report.png")}
          style={{ width: 30, height: 30 }}
        />
        <Text style={{ fontSize: 10 }}>Medical Reports</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "25%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../icons/helpline.png")}
          style={{ width: 30, height: 30 }}
        />
        <Text style={{ fontSize: 10 }}>Helpline</Text>
      </TouchableOpacity>
    </View>
  );
}

function Diseases() {
  return (
    <View style={[styles.mainContainer, { marginTop: 10 }]}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "500" }}>Diseases</Text>
        <TouchableOpacity>
          <Text style={{ color: "blue" }}>View all&gt;</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={DISEASES}
          renderItem={({ item, i }) => (
            <TouchableOpacity>
              <View
                style={{
                  padding: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 70,
                }}
              >
                <View
                  style={{
                    borderRadius: 50,
                    padding: 12,
                    borderWidth: 1,
                    borderColor: "gray",
                  }}
                >
                  <Image
                    source={item.img} // Specify the image source path
                    style={{ width: 30, height: 30 }} // Define width and height as needed
                  />
                </View>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text numberOfLines={1} style={{ fontSize: 10, marginTop: 5 }}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, i) => i}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

function Symptoms() {
  return (
    <View style={[styles.mainContainer, { marginTop: 10 }]}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "500" }}>Symptoms</Text>
        <TouchableOpacity>
          <Text style={{ color: "blue" }}>View all&gt;</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={SYMPTOMS}
          renderItem={({ item, i }) => (
            <TouchableOpacity>
              <View
                style={{
                  padding: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 70,
                }}
              >
                <View
                  style={{
                    borderRadius: 50,
                    padding: 12,
                    borderWidth: 1,
                    borderColor: "gray",
                  }}
                >
                  <Image
                    source={item.img} // Specify the image source path
                    style={{ width: 30, height: 30 }} // Define width and height as needed
                  />
                </View>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text numberOfLines={1} style={{ fontSize: 10, marginTop: 5 }}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, i) => i}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

function Help() {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={{ fontWeight: "500" }}>How can we help you today?</Text>
      </View>
      <View style={{ flexDirection: "row", paddingTop: 5 }}>
        <TouchableOpacity
          style={{
            flex: 0.6,
            backgroundColor: "rgb(226, 226, 226)",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 5,
          }}
        >
          <View>
            <Text>Video Consultation</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View style={{ paddingLeft: 5 }}>
              <TouchableOpacity>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgb(243, 200, 200)",
                    padding: 20,
                    borderRadius: 5,
                  }}
                >
                  <Text>In-Clinic Visit</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ paddingLeft: 5 }}>
              <TouchableOpacity>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgb(234, 234, 180)",
                    padding: 20,
                    marginTop: 5,
                    borderRadius: 5,
                  }}
                >
                  <Text>Weight Loss Clinic</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function MyAppointments({ onAppointmentsClick }) {
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          backgroundColor: "rgb(226, 226, 226)",
          padding: 5,
          borderRadius: 5,
        }}
      >
        <TouchableOpacity
          onPress={onAppointmentsClick}
          style={{ flexDirection: "row" }}
        >
          <View style={styles.padding5}>
            <Image
              source={require("../../icons/calendar.png")} // Specify the image source path
              style={{ width: 20, height: 20 }} // Define width and height as needed
            />
          </View>
          <View style={styles.padding5}>
            <Text>My Appointments</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Search() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInput}>
          <TextInput
            style={{
              borderWidth: 1,
              width: "100%",
              paddingLeft: 7,
              borderRadius: 5,
            }}
            placeholder="Search by"
          />
        </View>
        <View style={styles.searchIcon}>
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

function Header({ toggleHamburger }) {
  return (
    <View style={[styles.mainContainer, { marginTop: 10 }]}>
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={toggleHamburger}>
          <Image
            source={require("../../icons/hamburger.png")} // Specify the image source path
            style={{ width: 20, height: 20 }} // Define width and height as needed
          />
        </TouchableOpacity>
        <Text style={styles.headerLogo}>E-Health Care</Text>
        <TouchableOpacity>
          <Image
            source={require("../../icons/bell.png")} // Specify the image source path
            style={{ width: 20, height: 20 }} // Define width and height as needed
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function HamburgerMenu({
  hamburgered,
  setHamburgered,
  menuAnimation,
  navigation,
}) {
  return (
    hamburgered && (
      <Animated.View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          flexDirection: "row",
          transform: [
            {
              translateX: menuAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [-500, 0],
              }),
            },
          ],
        }}
      >
        <View
          style={{
            width: "50%",
            height: "100%",
            backgroundColor: "white",
            justifyContent: "center",
          }}
        >
          <View>
            <FlatList
              data={MENU}
              keyExtractor={(item, index) => index}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    if (item.name === "My Profile")
                      navigation.navigate("My Profile");
                    if (item.name === "Logout") {
                      AsyncStorage.removeItem("loggedIn");
                      navigation.navigate("Home");
                    }
                    if (item.name === "My Doctors") {
                      navigation.navigate("My Doctors");
                    }
                    if (item.name === "Your Appointments") {
                      navigation.navigate("My Appointments");
                    }
                  }}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <View style={{ padding: 10 }}>
                    <Image
                      style={{ width: 20, height: 20 }}
                      source={item.img}
                    />
                  </View>
                  <View style={{ padding: 10 }}>
                    <Text>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setHamburgered(false);
          }}
          style={{ width: "50%", height: "100%" }}
        />
      </Animated.View>
    )
  );
}

export default function PatientDashboard({ navigation }) {
  const [hamburgered, setHamburgered] = useState(false);
  const menuAnimation = useRef(new Animated.Value(0)).current;

  const toggleHamburger = () => {
    if (hamburgered) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const openMenu = () => {
    menuAnimation.setValue(0); // Reset the animation value
    Animated.timing(menuAnimation, {
      toValue: 1,
      duration: 500, // Adjust the duration as needed
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
    setHamburgered(true);
  };

  const closeMenu = () => {
    menuAnimation.setValue(1); // Reset the animation value
    Animated.timing(menuAnimation, {
      toValue: 0,
      duration: 500, // Adjust the duration as needed
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(() => {
      setHamburgered(false);
    });
  };

  useEffect(() => {
    const backAction = () => {
      if (hamburgered) {
        setHamburgered(false);
        return true; // Prevent default back button behavior
      }
      return false; // Allow default back button behavior
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => {
      backHandler.remove(); // Cleanup the event listener when the component unmounts
    };
  }, [hamburgered, setHamburgered]);

  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "white" }}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentContainerStyle={styles.mainContent}
        contentInsetAdjustmentBehavior="automatic"
      >
        <Header toggleHamburger={toggleHamburger} />
        <Search />
        <MyAppointments
          onAppointmentsClick={() => {
            navigation.navigate("My Appointments");
          }}
        />
        <Help />
        <Symptoms />
        <Diseases />
      </ScrollView>
      <BottomNavigation />
      <HamburgerMenu
        hamburgered={hamburgered}
        setHamburgered={setHamburgered}
        menuAnimation={menuAnimation}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContent: {
    paddingBottom: 65, // Adjust the paddingBottom to accommodate the bottom navigation
  },
  mainContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  headerLogo: {
    fontWeight: "800",
    fontSize: 20,
  },
  logoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchInput: { flex: 9, flexDirection: "row" },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  padding5: {
    padding: 5,
  },
  borderRadius5: {
    borderRadius: 5,
  },
});

const SYMPTOMS = [
  {
    name: "Fever",
    img: require("../../icons/fever.png"),
  },
  {
    name: "Hypertension",
    img: require("../../icons/hypertension.png"),
  },
  {
    name: "Heart Attack",
    img: require("../../icons/heart-attack.png"),
  },
  {
    name: "Pregnancy",
    img: require("../../icons/pregnancy.png"),
  },
  {
    name: "Breathlessness",
    img: require("../../icons/breathlessness.png"),
  },
  {
    name: "Diarrhea",
    img: require("../../icons/diarrhea.png"),
  },
];

const DISEASES = [
  {
    name: "Dengue Fever",
    img: require("../../icons/dengue-fever.png"),
  },
  {
    name: "Typhoid Fever",
    img: require("../../icons/typhoid.png"),
  },
  {
    name: "Piles",
    img: require("../../icons/piles.png"),
  },
  {
    name: "Gastritis",
    img: require("../../icons/gastritis.png"),
  },
  {
    name: "Hernia",
    img: require("../../icons/hernia.png"),
  },
  {
    name: "Vaginal Infection",
    img: require("../../icons/vaginal-infection.png"),
  },
];

const MENU = [
  {
    name: "My Profile",
    img: require("../../icons/my-profile.png"),
  },
  {
    name: "My Doctors",
    img: require("../../icons/my-doctors.png"),
  },
  {
    name: "Privacy Policy",
    img: require("../../icons/privacy-policy.png"),
  },
  {
    name: "Change Location",
    img: require("../../icons/location.png"),
  },
  {
    name: "Your Appointments",
    img: require("../../icons/appointments.png"),
  },
  {
    name: "Logout",
    img: require("../../icons/logout.png"),
  },
  {
    name: "Contact Us",
    img: require("../../icons/contact-us.png"),
  },
  {
    name: "Delete Account",
    img: require("../../icons/delete-account.png"),
  },
];
