import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

const PrivacyPolicyScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>
      <Text style={styles.paragraph}>
        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
      </Text>

      {/* Add more paragraphs and sections as needed */}

      <Text style={styles.paragraph}>
        By using our mobile application, you consent to the terms and conditions set forth in this Privacy Policy.
      </Text>
      <View style={styles.separator} />
      <Text style={styles.sectionTitle}>Information We Collect</Text>
      <Text style={styles.paragraph}>
        We may collect personal information that you provide directly to us, such as your name, contact information, and other details.
      </Text>

      {/* Add more sections and details as needed */}

      <Text style={styles.paragraph}>
        For more information about what data we collect and how we use it, please review our full Privacy Policy.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
    color: '#555',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
});

export default PrivacyPolicyScreen;
