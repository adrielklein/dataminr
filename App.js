/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

/**
 * Main rendering section of the app
 * You may use any resources from the internet or anything you want to download.
 * redux, react-redux & react-navigation are installed for convenience
 */

class App extends React.Component {
  render() {
    const theme = themes.light;
    return (
      <NavigationContainer>
        <View style={[styles.container, theme]}>
          <Text style={[styles.header, theme]}>Total Mobile</Text>
          <Text style={[styles.content, theme]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
            malesuada pellentesque elit eget gravida. Tempor orci eu lobortis
            elementum nibh. Fermentum et sollicitudin ac orci phasellus egestas.
            Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Sapien
            faucibus et molestie ac feugiat. Donec massa sapien faucibus et
            molestie ac feugiat sed. Aliquet risus feugiat in ante metus dictum
            at tempor commodo. In mollis nunc sed id semper risus in hendrerit.
          </Text>
          <TouchableHighlight onPress={() => null}>
            <Text style={[styles.button, theme]}> Settings </Text>
          </TouchableHighlight>
        </View>
      </NavigationContainer>
    );
  }
}

/**
 * Navigation using react-navigation
 * https://reactnavigation.org/docs/en/hello-react-navigation.html
 *
 * Provided here as a non-required option
 */

const themes = StyleSheet.create({
  light: {
    backgroundColor: '#e8f3ff',
    color: '#4d4c4c',
  },
  dark: {
    backgroundColor: '#071529',
    color: '#ffffff',
  },
});

const styles = StyleSheet.create({
  header: {
    padding: 16,
    fontSize: 32,
    fontWeight: '400',
    textAlign: 'center',
  },
  content: {
    padding: 16,
    fontSize: 16,
    fontWeight: '400',
  },
  button: {
    padding: 8,
    margin: 6,
    fontSize: 22,
    borderWidth: 1,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    padding: 60,
  },
});

export default App;
