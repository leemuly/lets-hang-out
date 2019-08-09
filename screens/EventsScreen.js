import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import TabBarIcon from '../components/TabBarIcon';
import CreateEvent from '../components/CreateEvent'

export default class EventsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false,
      text: '',
      firstQuery: '',
    };
  }

  closeModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  render() {
    const { firstQuery } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Searchbar
            placeholder="Search"
            onChangeText={query => {
              this.setState({ firstQuery: query });
            }}
            value={firstQuery}
          />

          <CreateEvent
            isModalVisible={this.state.isModalVisible}
            closeModal={() => this.closeModal()}
          />

    <TouchableOpacity
      onPress={() => this.setState({ isModalVisible: true })}
      style={styles.buttonContainer}
    >
      <TabBarIcon name="md-add-circle" />
    </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

EventsScreen.navigationOptions = {
  title: 'Upcoming Events'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    alignSelf: "flex-end",
  }
});
