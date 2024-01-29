
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

const ButtonSecondry = (props: ButtonProps) => {
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


				<Image

					source={require('../../../assets/image/question.png')}
                     style={{marginTop:4}}

				/>
				<Text
					style={[styles.title]}


				>
					{title}
				</Text>



			</View>


		</TouchableOpacity>
	);
};

export default ButtonSecondry;

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		//	borderRadius: 8,
		height: 73,
		justifyContent: 'center',
		//	marginHorizontal:20,
		marginTop: 25
	},
	title: { fontSize: 24, fontWeight: '600', color: '#295392',marginLeft:2 },
	titleview: { flexDirection: 'row', }
});
