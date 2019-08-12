import React from 'react';
import { Text, View, StyleSheet, Modal } from 'react-native';

export function EventListing(props) {
  return (
    <View style={styles.eventContainer}>
      <Text style={styles.eventTitle}>{props.eventInfo.name} </Text>
      <Text style={styles.eventDetails}>{props.eventInfo.date} | {props.eventInfo.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  eventContainer: {
    flex: 1,
    padding: 10,
    borderBottomColor: '#dadada',
    borderBottomWidth: 1,
  }, 
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  eventTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 5,
    fontSize: 15
  },
  eventDetails: {
    fontSize: 20,
    padding: 5,
    fontSize: 15
  }
})