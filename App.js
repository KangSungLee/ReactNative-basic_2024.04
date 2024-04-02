import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet } from 'react-native';
import HellowWorld from './components/HelloWorld';
import Cat from './components/Cat';
import State from './components/State';
import PizzaTranslator from './components/PizzaTranslator';
import FlatListBasic from './components/FlatListBasic';
import SectionListBasic from './components/SectionListBasic';
import FetchExample from './components/FetchExample';
import Count from './components/Count';

const logo ={
  uri: 'https://reactnative.dev/img/tiny_logo.png', width: 32, height: 32, };

export default function App() {
  return (
    <ScrollView>

      <FlatListBasic />


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
