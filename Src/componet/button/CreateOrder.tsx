 
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

const CreateOrder = (props: ButtonProps) => {
	const {title, icon, style, keyStr, isLoading, onPress} = props;
	const {colors} = useTheme();
	return (
		<TouchableOpacity
			disabled={isLoading}
			style={[styles.button, style]}
			onPress={onPress}
			key={keyStr}
		>
			<View style={styles.titleview}>
			{/* <Text
				style={[styles.title]}
						
						
						 >
						{title}
					</Text> */}


<Image

source={require('../../../assets/image/orderapprove.png')}
 style={{}}

/>
					<Text
				style={[styles.title,{fontSize:16}]}
						
						
						 >
					{title}
					</Text>
					
					</View>


		</TouchableOpacity>
	);
};

export default CreateOrder;

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
	//	borderRadius: 8,
		height:73,
		justifyContent: 'center',
	//	marginHorizontal:20,
	//	marginTop:25
	},
	title: { fontSize:16,fontWeight:'700',color:'#9DB7D9',marginTop:1.5},
	titleview:{flexDirection:'row',justifyContent:'space-between',marginHorizontal:30}
});
