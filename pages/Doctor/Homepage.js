import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
  TextInput,
  Animated,
  Easing,
  BackHandler,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
                      navigation.navigate("Doctor");
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

export default Homepage = () => {
  const [hamburgered, setHamburgered] = useState(false);
  const navigation = useNavigation();
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  options = [
    {
      id: 1,
      title: "Profile",
      image: "https://img.icons8.com/color/70/000000/administrator-male.png",
      screen: "My Profile",
    },
    {
      id: 1,
      title: "Appointments",
      image: "https://cdn-icons-png.flaticon.com/512/10620/10620231.png",
      screen: "Appointments",
    },
    {
      id: 2,
      title: "Manage Schedule",
      image:
        "https://cdn.icon-icons.com/icons2/516/PNG/512/calendar_clock_schedule_icon-icons.com_51085.png",
      screen: "Schedule",
    },
    {
      id: 3,
      title: "Payments",
      image: "https://cdn-icons-png.flaticon.com/512/69/69024.png",
      screen: "Payment",
    },
  ];

  const clickEventListener = () => {
    Alert.alert("Option selected");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.container}>
      <Header toggleHamburger={toggleHamburger} />
      <Search />
      <View
        style={{
          alignItems: "start",
          marginTop: 10,
          justifyContent: "center",
          height: 40,
          width: "90%",
          backgroundColor: "lightblue",
          paddingHorizontal: 20,
          borderRadius: 10,
          marginHorizontal: 20,
        }}
      >
        <Text style={styles.title}>Quick options</Text>
      </View>

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={options}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate(item.screen)}
              >
                <Image style={styles.cardImage} source={{ uri: item.image }} />

                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />

      {/* {isMenuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => alert("Menu item 1 selected")}
          >
            <Text style={styles.txt}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => alert("Menu item 2 selected")}
          >
            <Text style={styles.txt}>Appointments</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => alert("Menu item 3 selected")}
          >
            <Text style={styles.txt}>Profile</Text>
          </TouchableOpacity>
        </View>
      )} */}
      <HamburgerMenu
        hamburgered={hamburgered}
        setHamburgered={setHamburgered}
        menuAnimation={menuAnimation}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 20,
    backgroundColor: "#f6f6f6",
    zIndex: 1,
    // padding: 15,
  },
  txt: {
    fontSize: 18,
    fontWeight: "bold",
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    // borderCo:"black",
    paddingHorizontal: 5,
    // marginVertical:5,
    alignItems: "start",
    justifyContent: "center",
    padding: 25,
  },
  menu: {
    // backgroundColor: "blue",
    // zIndex: 3,
    position: "absolute",
    top: 70,
    left: 10,
    backgroundColor: "lightblue",
    padding: 10,
    shadowColor: "cyan",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 25,
    width: "65%",
    height: 500,
    borderWidth: 2,
    borderRadius: 15,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#f6f6f6",
  },
  listContainer: {
    alignItems: "center",
  },
  card: {
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: "#e2e2e2",
    width: 150,
    height: 150,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    padding: 20,
  },
  cardImage: {
    height: 70,
    width: 70,
    alignSelf: "center",
  },
  title: {
    fontSize: 16,
    alignSelf: "center",
    color: "#696969",
    fontWeight: "bold",
  },
  mainContent: {
    paddingBottom: 65, // Adjust the paddingBottom to accommodate the bottom navigation
  },
  mainContainer: {
    flex: 0.25,
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
