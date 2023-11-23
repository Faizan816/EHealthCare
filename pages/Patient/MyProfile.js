import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import Input from "../../components/Input";
import { useState, useEffect, useCallback } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TextInput } from "react-native-paper";

function Gender({ gender, setGender }) {
  return (
    <View style={{ padding: 10 }}>
      <Text>Gender</Text>
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <TouchableOpacity
          style={[
            {
              width: "50%",
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              padding: 10,
              borderRightWidth: 0.5,
              backgroundColor: "white",
            },
            gender === "Male"
              ? { backgroundColor: "rgb(28, 115, 180)" }
              : { borderWidth: 1, borderColor: "gray" },
          ]}
          onPress={() => {
            setGender("Male");
          }}
        >
          <View>
            <Text
              style={[
                { textAlign: "center" },
                gender === "Male" ? { color: "white" } : { color: "black" },
              ]}
            >
              Male
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {
              width: "50%",
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              padding: 10,
              borderWidth: 1,
              borderColor: "gray",
              borderLeftWidth: 0.5,
              backgroundColor: "white",
            },
            gender === "Female"
              ? { backgroundColor: "rgb(28, 115, 180)" }
              : { borderWidth: 1, borderColor: "gray" },
          ]}
          onPress={() => {
            setGender("Female");
          }}
        >
          <View>
            <Text
              style={[
                { textAlign: "center" },
                gender === "Female" ? { color: "white" } : { color: "black" },
              ]}
            >
              Female
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function MaritalStatus({ maritalStatus, setMaritalStatus }) {
  return (
    <View style={{ padding: 10 }}>
      <Text>Marital Status</Text>
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <TouchableOpacity
          style={[
            {
              width: "50%",
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              padding: 10,
              borderRightWidth: 0.5,
              backgroundColor: "white",
            },
            maritalStatus === "Single"
              ? { backgroundColor: "rgb(28, 115, 180)" }
              : { borderWidth: 1, borderColor: "gray" },
          ]}
          onPress={() => {
            setMaritalStatus("Single");
          }}
        >
          <View>
            <Text
              style={[
                { textAlign: "center" },
                maritalStatus === "Single"
                  ? { color: "white" }
                  : { color: "black" },
              ]}
            >
              Single
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {
              width: "50%",
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              padding: 10,
              borderWidth: 1,
              borderColor: "gray",
              borderLeftWidth: 0.5,
              backgroundColor: "white",
            },
            maritalStatus === "Married"
              ? { backgroundColor: "rgb(28, 115, 180)" }
              : { borderWidth: 1, borderColor: "gray" },
          ]}
          onPress={() => {
            setMaritalStatus("Married");
          }}
        >
          <View>
            <Text
              style={[
                { textAlign: "center" },
                maritalStatus === "Married"
                  ? { color: "white" }
                  : { color: "black" },
              ]}
            >
              Married
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function SaveButton() {
  return (
    <View style={{ padding: 10, marginTop: 30 }}>
      <TouchableOpacity
        style={{
          backgroundColor: "rgb(28, 115, 180)",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ textAlign: "center", color: "white" }}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

function DateOfBirth({ date, setDate }) {
  const [show, setShow] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={{ padding: 10 }}>
      <Text>Date of Birth</Text>
      <TouchableOpacity
        onPress={showDatepicker}
        style={{
          padding: 10,
          borderWidth: 1,
          borderColor: "gray",
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 5,
        }}
      >
        <Text>
          {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}
        </Text>
        <Image
          source={require("../../icons/dateofbirth.png")}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={onDateChange}
        />
      )}
    </View>
  );
}

export default function MyProfile({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerTintColor: "gray",
      headerTitleAlign: "center",
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <View style={{ padding: 10 }}>
        <Text style={{ color: "gray" }}>
          Let us know you better by sharing your information and enjoy a
          tailored journey just for you.
        </Text>
      </View>
      <View>
        <Input
          label="Name:"
          value={name}
          onChange={(value) => setName(value)}
          placeholder="e.g., Ali"
        />
        <Input
          label="Email:"
          value={email}
          onChange={(value) => setEmail(value)}
          placeholder="myemail@gmail.com"
        />
        <DateOfBirth date={date} setDate={setDate} />
        <Gender gender={gender} setGender={setGender} />
        <MaritalStatus
          maritalStatus={maritalStatus}
          setMaritalStatus={setMaritalStatus}
        />
        <SaveButton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  padding: {
    padding: 10,
  },
});
