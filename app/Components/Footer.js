import React from 'react';
import PropTypes from 'prop-types';
import {Footer, FooterTab, Button, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

class FooterComponent extends React.Component{
	static propTypes = {
		navigation: PropTypes.object,
	  };

	goDevice = () => {
		this.props.navigation.push('Device');
	}
	goLocation = () => {
		this.props.navigation.push('Location');
	}

	render(){
		return(
			<Footer>
		<FooterTab>
			<Button onPress={this.goDevice}>
				<Text style={styles.textStyle}>Device Info</Text>
			</Button>
			<Button style = {styles.buttonStyle} onPress={this.goLocation}>
				<Text style={styles.textStyle}>Geolocation</Text>
			</Button>
		</FooterTab>
	</Footer>
		)
	}
}
export default withNavigation(FooterComponent);
const styles = StyleSheet.create({
    buttonStyle: {
        borderColor: '#fff',
        borderLeftWidth:  1    },
    textStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'   
    }
})