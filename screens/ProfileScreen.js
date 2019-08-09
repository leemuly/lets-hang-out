import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText}>
            Help, it didn’t automatically reload!
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'My Profile',
};

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    textAlign: 'center'
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
