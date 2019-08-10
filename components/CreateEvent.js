import React, { Component } from 'react';
import {
  Modal,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet,
  Button,
} from 'react-native';
import { FirebaseWrapper } from '../firebase/firebase';
import TabBarIcon from '../components/TabBarIcon';
import DatePicker from 'react-native-datepicker';
import { getDate } from '../Utils'

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
        <View style={{ marginTop: 25 }}>
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
            style={{ width: 200 }}
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
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  close: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10,
  },
});
