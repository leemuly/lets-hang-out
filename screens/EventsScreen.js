import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import EventsHeader from '../components/EventsHeader';

export default class EventsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      firstQuery: '',
    };
  }

  render() {
    const { firstQuery } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <EventsHeader text="Upcoming Events" />
          <Searchbar
            placeholder="Search"
            onChangeText={query => {
              this.setState({ firstQuery: query });
            }}
            value={firstQuery}
          />
        </View>
      </ScrollView>
    );
  }
}

EventsScreen.navigationOptions = {
  title: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
