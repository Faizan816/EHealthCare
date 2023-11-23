import { View, StyleSheet, ScrollView } from "react-native";
import Heading from "../../components/Heading";
import { useEffect, useState } from "react";
import Input from "../../components/Input";
import DropDown from "../../components/DropDown";
import Button from "../../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PatientRegisterScreen() {
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem("myDataKey");
      if (jsonData) {
        const parsedData = JSON.parse(jsonData);
        setData(parsedData);
        console.log(parsedData);
      }
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  const [data, setData] = useState([]);
  const genders = ["male", "female"];
  const geneticDiseases = [
    "None",
    "Down syndrome (Trisomy 21).",
    "FragileX syndrome.",
    "Klinefelter syndrome.",
    "Triple-X syndrome.",
    "Turner syndrome.",
    "Trisomy 18.",
    "Trisomy 13",
    "Others",
  ];
  const maritalStatuses = ["Unmarried", "Married"];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState(genders[0]);
  const [geneticDisease, setGeneticDisease] = useState(geneticDiseases[0]);
  const [maritalStatus, setMaritalStatus] = useState(maritalStatuses[0]);

  const saveData = async () => {
    try {
      const jsonString = JSON.stringify(data);
      await AsyncStorage.setItem("myDataKey", jsonString);
      console.log("Data saved successfully");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const addItem = () => {
    const newItem = {
      id: data.length + 1,
      username: username,
      password: password,
      email: email,
      phoneNo: phoneNo,
      age: age,
      gender: gender,
      geneticDisease: geneticDisease,
      maritalStatus: maritalStatus,
    };
    setData([...data, newItem]);
    saveData();
  };

  return (
    <View style={styles.layoutContainer}>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: 80 }}
      >
        <Heading
          flex={0.2}
          align="flex-end"
          size={40}
          text="Sign Up"
          color="purple"
        />
        <Heading
          flex={0.3}
          align="flex-top"
          size={40}
          text="Patient Panel"
          color="green"
        />
        <View style={{ paddingTop: 40, paddingBottom: 100 }}>
          <Input
            label="Username:"
            value={username}
            onChange={(value) => setUsername(value)}
          />
          <Input
            label="Password:"
            hidden={true}
            value={password}
            onChange={(value) => setPassword(value)}
          />
          <Input
            label="Email:"
            value={email}
            onChange={(value) => setEmail(value)}
          />
          <Input
            label="Phone No#:"
            value={phoneNo}
            onChange={(value) => setPhoneNo(value)}
          />
          <Input label="Age:" value={age} onChange={(value) => setAge(value)} />
          <DropDown
            label="Gender:"
            items={genders}
            selectedValue={gender}
            handleChange={(value) => setGender(value)}
          />
          <DropDown
            label="Genetic Disease:"
            items={geneticDiseases}
            selectedValue={geneticDisease}
            handleChange={(value) => setGeneticDisease(value)}
          />
          <DropDown
            label="Marital Status:"
            items={maritalStatuses}
            selectedValue={maritalStatus}
            handleChange={(value) => setMaritalStatus(value)}
          />
          <View style={{ padding: 10 }}>
            <Button title="Submit" backgroundColor="purple" action={addItem} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    padding: 15,
  },
});
