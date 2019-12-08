import React from 'react';
import DeviceInfo from 'react-native-device-info';
import { Text, StyleSheet} from 'react-native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import {Container, Content, View} from 'native-base';
import styles from './styles';

export default class App extends React.Component {
  
  state = {devName: '', usedMemory: '' };  
  id = DeviceInfo.getUniqueId();
  appName = DeviceInfo.getApplicationName();
  model = DeviceInfo.getModel();
  componentDidMount() 
  {
    DeviceInfo.getDeviceName()
      .then(resp => {this.setState({devName: resp})});
    DeviceInfo.getUsedMemory()
      .then(resp => {this.setState({usedMemory: resp})});
  };

    render() {
    return (
      <Container>
        <Header title='Device Info'/>
        <Content>
        <Text style={styles.h3}> Device unique ID: {this.id}</Text>
        <Text style={styles.h3}> Device name: {this.state.devName}</Text>
        <Text style={styles.h3}> Model: {this.model}</Text>
        <Text style={styles.h3}> Application Name: {this.appName}</Text>
        <Text style={styles.h3}> Used memory: {Math.round(this.state.usedMemory/1000000)} Mb</Text>
        </Content>
        <Footer />
      </Container>
    );
  }
}