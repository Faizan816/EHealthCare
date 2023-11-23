import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../pages/HomeScreen";
import AdminScreen from "../pages/Admin/AdminScreen";
import Users from "../pages/Users";
import PatientScreen from "../pages/Patient/PatientScreen";
import DoctorScreen from "../pages/Doctor/DoctorScreen";
import PatientRegisterScreen from "../pages/Patient/PatientRegisterScreen";
import Books from "../pages/Book";
import DoctorRegisterScreen from "../pages/Doctor/DoctorRegisterScreen";
import PatientDashboard from "../pages/Patient/PatientDashboard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BlankScreen from "../pages/BlanScreen";
import MyProfile from "../pages/Patient/MyProfile";
import Homepage from "../pages/Doctor/Homepage";
import AppointmentPage from "../pages/Doctor/AppointmentsPage";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Blank"
          component={BlankScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DoctorHomePage"
          component={Homepage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Appointments"
          component={AppointmentPage}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="My Profile" component={MyProfile} />
        <Stack.Screen
          name="Admin"
          component={AdminScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Patient"
          component={PatientScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Doctor"
          component={DoctorScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PatientRegister"
          component={PatientRegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DoctorRegister"
          component={DoctorRegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Books"
          component={Books}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Movies" component={Users} />
        <Stack.Screen
          name="PatientDashboard"
          component={PatientDashboard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
