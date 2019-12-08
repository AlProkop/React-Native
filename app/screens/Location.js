import React from 'react';
import { Text, StyleSheet, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {PermissionsAndroid} from 'react-native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import {Container, Content} from 'native-base';
import styles from './styles';

export default class Location extends React.Component {
    state = {
        longitude:'',
        latitude: '',
        status: true
     };
    componentDidMount() {
        that = this;

        requestGPSPermission();
        async function requestGPSPermission() {
            try {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                  title: 'GPS Permission',
                  message:'App needs access to your gps module ',
                  buttonNegative: 'Cancel',
                  buttonPositive: 'OK',
                },
              );
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('granted');
                Geolocation.getCurrentPosition(position => {
                    const long = JSON.stringify(position.coords.longitude);
                    const lat = JSON.stringify(position.coords.latitude);
                    console.log(long);
                    console.log(lat);

                    that.setState({ status: false})
                    that.setState({ longitude: long })
                    that.setState({ longitude: long, latitude: lat });
                    },
                    error => Alert.alert("Error: " + error.message),
                    { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
                    )
                
              } else {
                console.log('GPS permission denied');
              }
            } catch (error) {
              Alert.alert(error);
            }
          }
        }

    render(){
        return(
            <Container>
                <Header title='Geo Location'/>
                <Content>
                    {(this.state.status) ? 
                    <Text style={styles.h3}>I'm trying to fing out where we are... </Text> : null}                   
                    <Text style={styles.h2}> Longitude: {this.state.longitude}</Text>
                    <Text style={styles.h2}> Latitude: {this.state.latitude}</Text>
                    </Content>
                <Footer />
            </Container> 
        );
    }
}

    