import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export function EventListing(props) {
  return (
    <View style={styles.eventContainer}>
      <Text style={styles.eventText}>{props.eventInfo.name} </Text>
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
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateUserContainer: {
    marginLeft: 3
  },
  eventText: {
    padding: 5,
    fontSize: 15
  }
})