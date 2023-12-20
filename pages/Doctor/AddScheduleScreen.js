import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const AddScheduleScreen = () => {
  const [schedules, setSchedules] = useState({
    Monday: null,
    Tuesday: null,
    Wednesday: null,
    Thursday: null,
    Friday: null,
    Saturday: null,
  });

  const [editMode, setEditMode] = useState(false);
  const [editedDay, setEditedDay] = useState('');
  const [editedStartTime, setEditedStartTime] = useState('');
  const [editedEndTime, setEditedEndTime] = useState('');

  const handleAddSchedule = () => {
    setSchedules((prevSchedules) => ({
      ...prevSchedules,
      [editedDay]: {
        startTime: editedStartTime,
        endTime: editedEndTime,
      },
    }));

    setEditMode(false);
    setEditedDay('');
    setEditedStartTime('');
    setEditedEndTime('');
  };

  const handleEditSchedule = (day, startTime, endTime) => {
    
    setEditMode(true);
    setEditedDay(day);
    setEditedStartTime(startTime);
    setEditedEndTime(endTime);
  };

  const renderScheduleItem = ({ item }) => (
    <View style={styles.scheduleItem}>
      <Text style={styles.day}>{item.day}</Text>
      <Text style={styles.time}>
        {item.startTime} - {item.endTime}
      </Text>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => handleEditSchedule(item.day, item.startTime, item.endTime)}
      >
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weekly Schedules</Text>
      <FlatList
        data={Object.entries(schedules).map(([day, schedule]) => ({
          day,
          startTime: schedule?.startTime || 'Not set',
          endTime: schedule?.endTime || 'Not set',
        }))}
        renderItem={renderScheduleItem}
        keyExtractor={(item) => item.day}
      />
      {editMode && (
        <View style={{padding:20, borderColor:"green",borderWidth:1,borderRadius:14}}>
            <Text style={styles.title}>Set schedule for {editedDay}</Text>
          <TextInput
            style={styles.input}
            placeholder="Start Time"
            value={editedStartTime}
            onChangeText={(text) => setEditedStartTime(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="End Time"
            value={editedEndTime}
            onChangeText={(text) => setEditedEndTime(text)}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddSchedule}>
            <Text style={styles.buttonText}>Save Schedule</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    padding: 25,
    backgroundColor: 'white',
    borderRadius: 12,
    elevation: 2,
    // border:"5px solid black"
  },
  day: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  time: {
    fontSize: 16,
    color: '#555',
  },
  editButton: {
    backgroundColor: "dodgerblue",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
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
  addButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default AddScheduleScreen;
