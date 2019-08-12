import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FirebaseWrapper } from '../firebase/firebase';

export default class ExploreScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      events: []
    }
  }

  async componentDidMount() {
    await FirebaseWrapper.GetInstance().SetupCollectionListener(
      'events',
      events => this.setState({ events })
    );
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 40.7135741,
          longitude: -73.9745921,
          latitudeDelta: 0.1300,
          longitudeDelta: 0.0429,
        }}
      >
        {
          this.state.events.map(event => (
            <Marker
              coordinate={event.location}
              key={event.id}
            />
          ))
        }

      </MapView>
    );
  }
}

ExploreScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});
