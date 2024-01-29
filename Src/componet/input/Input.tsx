import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardTypeOptions,
  ColorValue,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  Image
} from "react-native";
import {
  Controller,
  Control,
  ValidationRule,
  Validate,
  FieldValues,
  FieldError,
  Merge,
  FieldErrorsImpl,
} from "react-hook-form";
import DatePikerModal from "../DatePickerDateOfBirth";

type InputProps = {
  control: Control;
  name: string;
  lable?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  placeholderTextColor: ColorValue | undefined;
  pattern?: ValidationRule<RegExp> | undefined;
  style?: StyleProp<ViewStyle>;
  isPassword?: boolean;
  multiline?: boolean;
  validate?:
  | Validate<any, FieldValues>
  | Record<string, Validate<any, FieldValues>>
  | undefined;
  error?:
  | string
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<any>>
  | undefined;
  required?: string | ValidationRule<boolean> | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  isDate?: boolean | undefined;
  isDateOfBirth?: boolean | undefined;
  disabled?: boolean | undefined;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  isCorect?: boolean | undefined;
  icon?: boolean | undefined;
  isDark?: boolean | undefined;
  editable?: boolean;
  border?: boolean;
  ref?: any;
  maxDate?: Date | undefined;
  minDate?: Date | undefined;
};

// benefits of hook form
// Supports native form validation.
// It’s small and requires no dependencies.
// easy for validation

/**
 * created by jigar patel
 * @param props name controller & name is most required parameter
 * @returns return custom theme textInput
 */

const Input = (props: InputProps) => {
  const {
    control,
    name,
    placeholder,
    keyboardType,
    placeholderTextColor,
    pattern,
    style,
    isPassword,
    validate,
    error,
    required,
    isDate,
    isDateOfBirth,
    disabled,
    onPress,
    autoCapitalize,
    lable,
    isCorect,
    icon,
    multiline,
    isDark,
    editable,
    border,
    ref,
    maxDate,
    minDate,
  } = props;
  //  const { colors } = useTheme();
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [showDatePiker, setShowDatePiker] = useState<boolean>(false);
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: required,
        pattern: pattern,
        validate: validate,
      }}
      render={({ field: { onChange, value, onBlur } }) => (
        <View>
          {lable && (
            <Text
              style={{
                marginVertical: 4,
                color: isDark ? "#ffff" : "#ffff",
                fontWeight: isDark ? "600" : "400",
                fontSize: 14,
                fontFamily: "Myriad Pro",
              }}
            >
              {lable}
            </Text>
          )}

          <TouchableOpacity
            activeOpacity={1}
            onPress={
              isDate || isDateOfBirth
                ? () => {
                  setShowDatePiker(true);
                }
                : onPress
            }
            style={[
              styles.container,
              {
                //  borderColor: isDark ? "#c4cbd4" : colors.border,
                borderRadius: border ? 15 : 10,
              },
            ]}
          >
            <TextInput
              style={[
                styles.input,
                {
                  color: "#295392",
                  height: multiline ? 112 : 44,
                  paddingTop: multiline ? 10 : 0,
                },
                style,
              ]}
              textAlignVertical={"center"}
              autoCapitalize={autoCapitalize}
              placeholder={placeholder}
              keyboardType={keyboardType}
              placeholderTextColor={
                placeholderTextColor
                  ? placeholderTextColor
                  : isDark
                    ? "#c4cbd4"
                    : "#52525280"
              }
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              ref={ref}
              secureTextEntry={isPassword ? passwordVisible : false}
              editable={editable}
              selectTextOnFocus={!disabled}
              onPressIn={
                isDate || isDateOfBirth
                  ? () => {
                    setShowDatePiker(true);
                  }
                  : onPress
              }
              multiline={multiline}
            />



            {isDate && (
              <Image

                source={require('../../../assets/image/calendarmonth.png')}
                style={{ width: 30, height: 30 }}
              />
            )}


          </TouchableOpacity>
          <Text style={styles.error}>{error ? error.toString() : " "}</Text>
          {isDate && (
            <DatePikerModal
              isVisible={showDatePiker}
              onDateSelect={onChange}
              onCancle={() => {
                setShowDatePiker(false);
              }}
              onClose={() => {
                setShowDatePiker(false);
              }}
              maxDate={maxDate}
              minDate={minDate}
            />
          )}


        </View>
      )}
    />
  );
};

export default Input;

Input.defaultProps = {
  placeholderstyle: "",
  placeholder: "",
  keyboardType: "default",
  placeholderTextColor: null,
  pattern: undefined,
  style: {},
  isPassword: false,
  validate: undefined,
  error: undefined,
  isDate: false,
  isDateOfBirth: false,
  disabled: false,
  autoCapitalize: undefined,
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    // borderRadius: 10,
    //   borderWidth: 1,
    flexDirection: "row",
    marginTop: 0,
    paddingHorizontal: 10,
    backgroundColor: '#ffff'
  },
  error: { color: "#ffff", fontSize: 14, marginTop: 2 },
  input: {
    flex: 1,
    height: 47,

    /*    borderRadius:32,
    borderWidth:1, */
  },
});
