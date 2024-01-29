 
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
  View,
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

const ButtonLearnUSDFx = (props: ButtonProps) => {
	const {title, icon, style, keyStr, isLoading, onPress} = props;
	const {colors} = useTheme();
	return (
		<TouchableOpacity
			disabled={isLoading}
			style={[styles.button, style]}
			onPress={onPress}
			key={keyStr}
		>
		
			<Text
				style={[styles.title]}
						
						
						 >
						{title}
					</Text>

				
				


		</TouchableOpacity>
	);
};

export default ButtonLearnUSDFx;

const styles = StyleSheet.create({
	button: {
		//alignItems: 'center',
	//	borderRadius: 8,
		height:73,
		justifyContent: 'center',
		
          
		marginHorizontal:20,
		marginTop:25
	},
	title: { fontSize:14,fontWeight:'700',top:1.5,color:'#FFFFFF',textAlign:'center'},
	titleview:{flexDirection:'row',justifyContent:'space-between',marginHorizontal:30}
});
