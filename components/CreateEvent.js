import React, { Component } from 'react';
import {
  Modal,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet,
  Button,
  Image,
  Text,
} from 'react-native';
import { FirebaseWrapper } from '../firebase/firebase';
import TabBarIcon from '../components/TabBarIcon';
import DatePicker from 'react-native-datepicker';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { getDate } from '../Utils';
import PLACES_KEY from '../secrets'

export default class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      description: '',
    };
  }

  async createEvent() {
    try {
      await FirebaseWrapper.GetInstance().CreateNewDocument('events', {
        name: this.state.name,
        date: this.state.date,
        description: this.state.description,
      });
      this.props.closeModal();
    } catch (error) {
      console.log('failed to create event: ', error);
    }
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.isModalVisible}
      >
        <View style={styles.inputsContainer}>
          <TouchableHighlight
            onPress={() => {
              this.props.closeModal();
            }}
            style={styles.close}
          >
            <TabBarIcon name="md-close" />
          </TouchableHighlight>

          <TextInput
            multiline={false}
            onChangeText={name => this.setState({ name })}
            placeholder="The name of the event is..."
            value={this.state.name}
            style={styles.input}
          />

          <DatePicker
            style={{ height: 40, width: 350 }}
            date={this.state.date}
            mode="date"
            placeholder="It's on..."
            format="YYYY-MM-DD"
            minDate={`"${getDate().today}"`}
            maxDate={`"${getDate().calRange}"`}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={date => {
              this.setState({ date: date });
            }}
          />

<GooglePlacesAutocomplete
            placeholder="Located at.."
            minLength={2} // minimum length of text to search
            autoFocus={false}
            listViewDisplayed="auto" // true/false/undefined
            fetchDetails={true}
            renderDescription={row => row.description} // custom description render
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            getDefaultValue={() => ''}
            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: PLACES_KEY,
              language: 'en', // language of the results
            }}
            styles={{
              textInputContainer: {
                width: '100%',
              },
              description: {
                fontWeight: 'bold',
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
            }}
            currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
            currentLocationLabel="Current location"
            nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch

            GooglePlacesSearchQuery={{
              // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
              rankby: 'distance',
              type: 'street_address',
            }}
            GooglePlacesDetailsQuery={{
              // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
              fields: 'formatted_address',
            }}
            debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
          />

          <TextInput
            multiline={true}
            numberOfLines={6}
            onChangeText={description => this.setState({ description })}
            placeholder="Here's the plan..."
            value={this.state.description}
            style={styles.input}
          />
        </View>

        <Button title="Create Event" onPress={() => this.createEvent()} />
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  inputsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 350,
    margin: 15,
    height: 40,
    borderColor: '#808080',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  close: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10,
  },
});
