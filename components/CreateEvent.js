import React, { Component } from 'react';
import {
  Modal,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet,
  Button,
  Text,
} from 'react-native';
import { FirebaseWrapper } from '../firebase/firebase';
import TabBarIcon from '../components/TabBarIcon';
import DatePicker from 'react-native-datepicker';
import { getDate } from '../Utils';
import PLACES_KEY from '../secrets';

const defaultState = {
  name: '',
  date: '',
  description: '',
  location: '',
};

export default class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  async createEvent() {
    try {
      await FirebaseWrapper.GetInstance().CreateNewDocument('events', {
        name: this.state.name,
        date: this.state.date,
        description: this.state.description,
        location: this.state.location,
      });
      this.setState(defaultState);
      this.props.closeModal();
    } catch (error) {
      console.log('failed to create event: ', error);
    }
  }

  // async onSetDestination(destination){
  //   try{
  //     // this.setState({destination})
  //     // const startLoc = { latitude: 40.753024, longitude: -73.981627}
  //     // const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${PLACES_KEY}
  //     // &input=${this.state.destination}&location=${startLoc.latitude}, ${startLoc.latitude}&radius=10000`
  //     // const res = await fetch(apiUrl)
  //     // const json = await res.json();
  //     // console.log(json);
  //   } catch (err) {
  //     console.err("unable to fetch destination ", err)
  //   }
  // }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.isModalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.inputsContainer}>
            <View style={styles.inputsHeader}>
              <Text style={styles.headerText} >
                Add an upcoming event
              </Text>
              <TouchableHighlight
                onPress={() => {
                  this.props.closeModal();
                }}
                style={styles.close}
              >
                <TabBarIcon name="md-close" />
              </TouchableHighlight>
            </View>

            <TextInput
              multiline={false}
              onChangeText={name => this.setState({ name })}
              placeholder="The name of the event is..."
              value={this.state.name}
              style={styles.input}
            />

            <DatePicker
              style={styles.dateInput}
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

            <TextInput
              multiline={false}
              style={styles.input}
              placeholder="It's located at..."
              value={this.state.location}
              onChangeText={location => this.setState({ location })}
            />

            <TextInput
              multiline={true}
              numberOfLines={6}
              onChangeText={description => this.setState({ description })}
              placeholder="Here's the plan..."
              value={this.state.description}
              style={styles.input}
            />
            <Button title="Create Event" onPress={() => this.createEvent()} />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
  },
  inputsContainer: {
    width: 400,
    height: 380,
    backgroundColor: '#fff',
    padding: 20,
  },
  inputsHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline"
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  input: {
    width: 350,
    margin: 15,
    height: 40,
    borderColor: '#808080',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  dateInput: {
    width: 350,
    margin: 15,
    height: 40,
  },
  close: {
    width: 15,
    height: 15
  },
});
