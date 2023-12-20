import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const appointmentRequests = [
  { id: '1', patientName: 'Faizan' },
  { id: '2', patientName: 'Ahsan' },
  { id: '3', patientName: 'Ahmed' },
  { id: '4', patientName: 'Ayesha' },
  // Add more appointment data as needed
];

const RequestAppointments = ({ navigation }) => {
  const [appointments, setAppointments] = useState(appointmentRequests);

  const handleAccept = (id) => {
    setAppointments((prevAppointments) => prevAppointments.filter(appointment => appointment.id !== id));
  };

  const handleReject = (id) => {
    setAppointments((prevAppointments) => prevAppointments.filter(appointment => appointment.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.appointmentItem}>
      <Text style={styles.patientName}>{item.patientName}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.acceptButton} onPress={() => handleAccept(item.id)}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rejectButton} onPress={() => handleReject(item.id)}>
          <Text style={styles.buttonText}>Reject</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={appointments}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  appointmentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
  },
  patientName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  acceptButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  rejectButton: {
    backgroundColor: '#f44336',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginLeft: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RequestAppointments;
