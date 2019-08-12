import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import TabBarIcon from '../components/TabBarIcon';
import CreateEvent from '../components/CreateEvent';
import { FirebaseWrapper } from '../firebase/firebase';
import { EventListing } from '../components/EventListing';
import SingleEvent from '../components/SingleEvent';

export default class EventsScreen extends React.Component {
  //header title and create event button
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
      isCreateEventModalVisible: false,
      isSingleEventModalVisible: false,
      text: '',
      firstQuery: '',
      events: [],
      singleEvent: {},
    };
  }

  async componentDidMount() {
    //enables us to pass props to header which renders at a different time
    this.props.navigation.setParams({ setState: this._createEventModalTrue });
    await FirebaseWrapper.GetInstance().SetupCollectionListener(
      'events',
      events => this.setState({ events })
    );
  }

  //enables create event button in header
  _createEventModalTrue = () => {
    this.setState({ isCreateEventModalVisible: true });
  };

  closeCreateEventModal() {
    this.setState({
      isCreateEventModalVisible: !this.state.isCreateEventModalVisible,
    });
  }

  closeSingleEventModal() {
    this.setState({
      isSingleEventModalVisible: !this.state.isSingleEventModalVisible,
    });
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
            isCreateEventModalVisible={this.state.isCreateEventModalVisible}
            closeCreateEventModal={() => this.closeCreateEventModal()}
          />

          <ScrollView>
            {this.state.events &&
              this.state.events.map(event => (
                <TouchableOpacity
                  onPress={() => this.setState({
                    isSingleEventModalVisible: true,
                    singleEvent: event,
                  })}
                  key={`opacity: ${event.id}`}
                >
                  <EventListing eventInfo={event} key={event.id} />
                  <SingleEvent
                    isSingleEventModalVisible={
                      this.state.isSingleEventModalVisible
                    }
                    closeSingleEventModal={() => this.closeSingleEventModal()}
                    eventInfo={event}
                    key={`singleEvent: ${event.id}`}
                  />
                </TouchableOpacity>
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
  },
});
