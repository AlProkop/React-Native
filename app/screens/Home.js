import React from 'react';
import { Text} from 'react-native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import {Container, Content, View} from 'native-base';
import styles from './styles';

export default () => (
    <Container>
        <Header title='Home page'/>
		<Content contentContainerStyle={{flex: 0.9,  justifyContent: 'center'}}>
                <Text style={styles.h1}>Programming Mobile Smart Devices</Text>
                <Text style={styles.h2}>Compulsory assignment 2/2</Text>
                <Text style={styles.h3}>(React-native application with several activities) </Text>
        </Content>
        <Footer />
    </Container>
) 