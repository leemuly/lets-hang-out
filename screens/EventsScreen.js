import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import TabBarIcon from '../components/TabBarIcon';
import CreateEvent from '../components/CreateEvent';
import { FirebaseWrapper } from '../firebase/firebase';
import { EventListing } from '../components/EventListing';

export default class EventsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Upcoming Events',
      headerRight: (
        <TouchableOpacity
          onPress={navigation.getParam('setState')}
          style={{ right: 10 }}
        >
          <TabBarIcon name="md-add-circle" />
        </TouchableOpacity>
      ),
    };
  };

  constructor() {
    super();
    this.state = {
      isModalVisible: false,
      text: '',
      firstQuery: '',
      events: [],
    };
  }

  async componentDidMount() {
    this.props.navigation.setParams({ setState: this._modalTrue });
    await FirebaseWrapper.GetInstance().SetupCollectionListener(
      'events',
      events => this.setState({ events })
    );
  }

  _modalTrue = () => {
    this.setState({ isModalVisible: true });
  };

  closeModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  render() {
    const { firstQuery } = this.state;
    return (
      <ScrollView>
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

          <ScrollView>
            {this.state.events &&
              this.state.events.map(event => (
                <EventListing eventInfo={event} key={event.id} />
              ))}
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  buttonOverlay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    right: 10,
    marginBottom: 50,
  },
  button: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
});
