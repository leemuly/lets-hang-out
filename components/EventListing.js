import React from 'react';
import { Text, View, StyleSheet, Modal } from 'react-native';

export function EventListing(props) {
  return (
    <View style={styles.eventContainer}>
      <View style={styles.listingHeader}>
      <Text style={styles.eventTitle}>{props.eventInfo.name}</Text>
      <Text style={styles.eventDate}>{props.eventInfo.date}</Text>
      </View>
      <Text style={styles.eventDetails}>{props.eventInfo.address}</Text>
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
  listingHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  eventDate: {
    color: 'grey'
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