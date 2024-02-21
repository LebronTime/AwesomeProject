import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
// import Welcome from './screens/Welcome';
// import Ex01 from './screens/week2/Ex01';
// import Ex02 from './screens/week2/Ex02';
// import Ex03 from './screens/week2/Ex03';
// import Ex04 from './screens/week2/Ex04';
// import Ex05 from './screens/week2/Ex05';
// import Ex06 from './screens/week2/Ex06';
// import Ex07 from './screens/week2/Ex07';
// import Ex08 from './screens/week2/Ex08';
// import Ex09 from './screens/week2/Ex09';
// import Ex10 from './screens/week2/Ex10';
// import Ex11 from './screens/week2/Ex11';
// import Ex12 from './screens/week2/Ex12';
// import Extra from './screens/week2/Extra';
// import Greeting from './components/Greeting';
import Travel from './screens/week3/Travel';
import Card from './components/week3/Card';
import Hotel from './components/week3/Hotel';
import MyIcon from './components/week3/MyIcon';
import Signup from './components/week3/Signup';
import Menu from './components/week3/Menu';
import { PaperProvider } from 'react-native-paper';
import TestPaper from './screens/week4/TestPaper';
import Resort from './screens/week3/Resort';

export default function App() {
  return (
    // <Welcome />
    // <Ex01 />
    // <Ex02 />
    // <Ex03 />
    // <Ex04 />
    // <Ex05 />
    // <Ex06 />
    // <Ex07 />
    // <Ex08 />
    // <Ex09 />
    // <Ex10 />
    // <Ex11 />
    // <Ex12/>
    // <Extra />
    // <View style={styles.container}>
    // <Greeting name='Rexxar' />
    // <Greeting name='Jaina' />
    // <Greeting name='Valeera' />
    // </View>
    // <Greeting />
    //  <View style={styles.container}>
    //  {/* <Signup />
    //  <Card />
    //  <Hotel />
    //  <MyIcon />
    //  <Menu /> */}
    //  <Travel />
    // </View>
    // <PaperProvider>
    //   <TestPaper />
    // </PaperProvider>

    <Resort />
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
