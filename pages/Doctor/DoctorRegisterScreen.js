import { View, StyleSheet, ScrollView, Button, Text } from "react-native";
import Heading from "../../components/Heading";
import { useState } from "react";
import Input from "../../components/Input";
import DropDown from "../../components/DropDown";
import DocumentUpload from "../../components/DocumentUpload";
import { TouchableOpacity } from "react-native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
  onAuthStateChanged,
} from "firebase/auth";
import {app, auth } from "./../firebase";
export default function DoctorRegisterScreen({navigation}) {
  const genders = ["male", "female"];
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "The Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo, Democratic Republic of the",
    "Congo, Republic of the",
    "Costa Rica",
    "C\u00F4te d\u2019Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor (Timor-Leste)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "The Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Sudan, South",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState(genders[0]);
  const [qualification, setQualification] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const [country, setCountry] = useState("");
  const [currentOccupation, setCurrentOccupation] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleSignup = async () => {
    // const db = getDatabase(app);
    console.log("LOGGED");
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Sign Up
        // console.log("Succesfull");
        const user = userCredential.user;
        console.log("user data,", user);

        // push(ref(db, "/userInformation"), {
        //   userId: userCredential.user.uid,
        //   name: name,
        //   phone:phone,
        //   email: text,
        //   password: pass,
        // });

        alert("Account Created successfully");
        navigation.navigate("Doctor");
        // write code to save your data in firestore
        // FirebaseError.firestore.write(user.uid,user.uid)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error Code == ", errorCode);
        console.log("Error Message == ", errorMessage);
        alert(errorMessage);
      });
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
          text="Doctor Panel"
          color="green"
        />
        
        <View style={{ paddingTop: 40, paddingBottom: 100 }}>
          <Input
            label="Username:"
            value={username}
            onChange={(value) => setUsername(value)}
          />
            <Input
              label="Email:"
              value={email}
              onChange={(value) => setEmail(value)}
            />
          <Input
            label="Password:"
            hidden={true}
            value={password}
            onChange={(value) => setPassword(value)}
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
          {/* <Input
            label="Qualification:"
            value={qualification}
            onChange={(value) => setQualification(value)}
          />
          <Input
            label="Experience Years:"
            value={experienceYears}
            onChange={(value) => setExperienceYears(value)}
          />
          <DropDown
            label="Country:"
            items={countries}
            selectedValue={country}
            handleChange={(value) => setCountry(value)}
          />
          <Input
            label="Current Occupation:"
            value={currentOccupation}
            onChange={(value) => setCurrentOccupation(value)}
          /> */}
          <Input
            label="Speciality:"
            value={speciality}
            onChange={(value) => setSpeciality(value)}
          />
          {/* <DocumentUpload label="Certificate:" /> */}

          <TouchableOpacity
              onPress={handleSignup}
              style={{
                backgroundColor: "rgb(32, 150, 255)",
                alignItems: "center",
                padding: 12,
                borderRadius: 12,
                opacity: 0.8,
                marginTop:50
              }}
            >
              <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>Sign UP</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Doctor")}
              style={{
                backgroundColor: "rgb(61, 130, 255)",
                alignItems: "center",
                padding: 12,
                borderRadius: 12,
                opacity: 0.8,
                marginTop:25
              }}
            >
              <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>Login</Text>
            </TouchableOpacity>
              
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
