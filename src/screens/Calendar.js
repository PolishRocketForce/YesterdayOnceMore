import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={onDayPress}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' }
        }}
      />
      <Text style={styles.selectedDateText}>Selected Date: {selectedDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  selectedDateText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CalendarPage;
