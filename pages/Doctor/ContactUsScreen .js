import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ContactUsScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Implement logic to send the message (e.g., use an API, send an email, etc.)
    // For this example, we'll just log the details to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // You can add further logic here, such as validation or actual messaging functionality
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>WhatsApp Number:</Text>
        <Text style={styles.whatsappNumber}>+1234567890</Text>
      </View>

      <Text style={styles.label}>Your Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text style={styles.label}>Your Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Your Message:</Text>
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Type your message here"
        value={message}
        onChangeText={(text) => setMessage(text)}
        multiline
      />

      <TouchableOpacity style={styles.sendMessageButton} onPress={handleSendMessage}>
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  infoContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  whatsappNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#009688',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 12,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  sendMessageButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ContactUsScreen;
