
import React from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	StyleProp,
	ViewStyle,
	ActivityIndicator,
	View,
	Image
} from "react-native";

import { useTheme } from '@react-navigation/native';




type ButtonProps = {
	title: string;
	onPress: () => void;
	style?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<ViewStyle>;
	icon?: any;
	isLoading?: boolean;
	keyStr?: string;
};

const ButtonBottom = (props: ButtonProps) => {
	const { title, icon, style, keyStr, isLoading, onPress } = props;
	const { colors } = useTheme();
	return (
		<TouchableOpacity
			disabled={isLoading}
			style={[styles.button, style]}
			onPress={onPress}
			key={keyStr}
		>
			<View style={styles.titleview}>
				<View style={styles.circle}>

					<Image
						source={require('../../../assets/image/backarrow.png')} // Replace with your image source
						style={styles.image}
					/>

				</View>

				<View style={{ flexDirection: 'column' }}>
					<View style={{ flexDirection: 'row', marginTop: 10 }}>
						<Text
							style={[styles.title, { marginLeft: 2 }, { fontSize: 12 }]}


						>
							USDFx Exchange Price
						</Text>
						<Text
							style={[styles.title, { color: '#fff' }, { marginLeft: 5 }, { fontSize: 12 }, { fontWeight: '400' }]}


						>
							(1 USDFx)
						</Text>
					</View>
					<View style={{ flexDirection: 'row', marginTop: 3 }}>
						<Text
							style={[styles.title, { marginLeft: 10 }, { color: '#fff' }, { fontWeight: '300' }]}


						>
							BUY
						</Text>

						<Text
							style={[styles.title, { marginLeft: 10 }]}


						>
							88.90 INR
						</Text>



						<Text
							style={[styles.title, { marginLeft: 20 }, { color: '#fff' }, { fontWeight: '300' }]}


						>
							SELL
						</Text>


						<Text
							style={[styles.title, { marginLeft: 10 }]}


						>
							83.90 INR
						</Text>
					</View>
				</View>

			</View>


		</TouchableOpacity>
	);
};

export default ButtonBottom;

const styles = StyleSheet.create({
	button: {
		//alignItems: 'center',
		//	borderRadius: 8,
		height: 73,
		justifyContent: 'center',
		marginRight: 10
		//	marginHorizontal:20,
		//	marginTop:25
	},
	title: { fontSize: 18, fontWeight: '700', top: 1.5, color: '#FFFFFF', textAlign: 'center' },
	titleview: { flexDirection: 'row', marginHorizontal: 10, },
	circle: {
		width: 70,
		height: 70,
		borderRadius: 90, // Half of width and height for a perfect circle
		backgroundColor: '#D0E0F3',
		bottom: 10 // You can set your desired background color
	},
	image: {
		position: 'absolute',
		top: 25,
		right: 15,
		width: 20,
		height: 20,
		resizeMode: 'contain',
		// Adjust image styles as needed
	},
});
