import { Text, View, Button } from "react-native";
import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";

export default function DocumentUpload({ label }) {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      if (!result.canceled) {
        setSelectedDocument(result);
      } else {
        // Handle the case where the user cancels the document picker
        console.log("Document picking canceled." + result.assets[0].name);
      }
    } catch (error) {
      console.error("Error picking document:", error);
    }
  };

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ flex: 1, fontSize: 16, fontWeight: "600" }}>{label}</Text>
      <View style={{ flex: 2, height: 50 }}>
        <Button
          title={selectedDocument ? selectedDocument.assets[0].name : label}
          onPress={pickDocument}
        />
      </View>
    </View>
  );
}
