import {useTheme} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, Text, View, Image} from 'react-native';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';


const Loader = () => {
	const {colors} = useTheme();
	const app = useSelector((state: any) => state.user);
	console.log('appLoader',app)

	return (
		<Modal
			isVisible={app.isLoading}
			backdropOpacity={0}
			style={{margin: 0}}
			coverScreen={false}
			animationIn={'fadeIn'}
			animationOut={'fadeOut'}
		>
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'black',
				}}
			>
				<Image
				//	source={require('../../../assets/images/Spinner.gif')}

source={require('../../assets/image/Spinner.gif')}
				
					style={{width: 100, height: 100}}
				/>

				<Text style={{marginTop: 10, color: '#FFFFFF', fontSize: 20}}>Please Wait...!</Text>
			</View>
		</Modal>
	);
};

export default Loader;
