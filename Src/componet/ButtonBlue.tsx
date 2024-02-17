 
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
} from "react-native";

import {useTheme} from '@react-navigation/native';
 
 


type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
  icon?: any;
  isLoading?: boolean;
  keyStr?: string;
};

const ButtonBlue = (props: ButtonProps) => {
	const {title, icon, style, keyStr, isLoading, onPress} = props;
	const {colors} = useTheme();
	return (
		<TouchableOpacity
			disabled={isLoading}
			style={[styles.button, {backgroundColor: 'blue'}, style]}
			onPress={onPress}
			key={keyStr}
		>
			{icon}
			{isLoading
				? (
					<ActivityIndicator color={colors.background} />
				)
				: (
					<Text
						style={{
							color: colors.background,
							...styles.title,
						}} >
						{title}
					</Text>
				)}
		</TouchableOpacity>
	);
};

export default ButtonBlue;

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		borderRadius: 8,
		height:   56,
		justifyContent: 'center',
	},
	title: {fontFamily: 'Myriad Pro', fontSize: 16,fontWeight:'600',top:1.5},
});
