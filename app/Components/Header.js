import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {withNavigation} from 'react-navigation';
import {Dimensions } from "react-native";

class HeaderComponent extends React.Component{
    static propTypes = {
        navigation: PropTypes.object,
        title: PropTypes.string
      };
    goHome = () => {
        this.props.navigation.push('Home'); 
    }
    render(){
        return(
            <View style={styles.viewStyle}>
                <TouchableOpacity style={styles.touchStyle} 
                    onPress={()=>this.goHome()}>
                    <Image style={styles.imageStyle} source={require('./home.png')} />
                </TouchableOpacity>     
                <Text style={styles.textStyle}>{this.props.title}</Text>
            </View>
        );
    }
}

export default withNavigation(HeaderComponent);

const styles = StyleSheet.create({
    imageStyle:{
        width: 65,
        height: 65,
    },
    touchStyle: {
        paddingLeft: 7,
    },

    viewStyle: {
        backgroundColor: '#3F51B5',
        height:100,
        shadowColor: '#000',
        shadowOffset: {width:0, height:2},
        elevation: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    textStyle: {
        color: '#fff',
        fontSize: 32,
        width: 300,
        fontWeight: 'bold',
        paddingLeft: Math.round(Dimensions.get('window').width)/2 - 150
    }
})