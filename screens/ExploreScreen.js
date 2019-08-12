import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { FirebaseWrapper } from '../firebase/firebase';
import SingleEvent from '../components/SingleEvent';

export default class ExploreScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      isSingleEventModalVisible: false,
    };
  }

  async componentDidMount() {
    await FirebaseWrapper.GetInstance().SetupCollectionListener(
      'events',
      events => this.setState({ events })
    );
  }

  closeSingleEventModal() {
    this.setState({
      isSingleEventModalVisible: !this.state.isSingleEventModalVisible,
    });
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 40.7135741,
          longitude: -73.9745921,
          latitudeDelta: 0.13,
          longitudeDelta: 0.0429,
        }}
      >
        {this.state.events
          .filter(event => event.location)
          .map(event => (
            <Marker
              title={event.name}
              description={event.date}
              coordinate={event.location}
              key={event.id}
              onCalloutPress={() =>
                this.setState({
                  isSingleEventModalVisible: true,
                })
              }
            />
          ))}
      </MapView>
    );
  }
}

ExploreScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});
