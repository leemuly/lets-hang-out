import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

export default class PlansScreen extends React.Component {
  
  render() {
    return (
      <ScrollView >
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Get excited! Here's what you've got coming up...
          </Text>
        </View>
      </ScrollView>
    );
  }
}

PlansScreen.navigationOptions = {
  title: 'My Plans',
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 20,
    color: '#104e8b',
    textAlign:'center'
  }
});
