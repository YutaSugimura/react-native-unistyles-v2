/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';

import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import './assets/styles/unistyles';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const {styles} = useStyles(stylesheet, {size: 'large'});

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Text style={styles.text}>Unistyles example</Text>
    </SafeAreaView>
  );
}

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  text: {
    color: theme.colors.typography,
    fontWeight: 'bold',
    variants: {
      ...theme.text.variants,
    },
  },
}));

export default App;
