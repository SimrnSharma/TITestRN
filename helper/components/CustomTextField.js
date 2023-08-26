import React, { useState } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from "react-native";
import { color } from "../Common/Colors";
import { CustomStyling } from "../CustomStyle/CustomStyling";
import { ImageButton } from "./ImageButton";
import { ImagesPath } from "../../assets/Icons/ImagesPath";

const CustomTextField = ({
    containerStyle,
    viewStyle,
    textInputStyle,
    textInputMultiline,
    textInputLines,
    leftImagePath,
    rightImagePath,
    defaultValue,
    isPasswordField,
    doHideContent,
    pickerLabel,
    pickerLabelStyle,
    value,
    fieldColor,
    placeholder,
    placeholderColor,
    editable,
    keyboardType,
    showError,
    errorText,
    alignTextVert,
    charCapital,
    maxlength,
    onStart = () => {},
    onTextChange = () => {},
    onEditingEnd = () => {},
    onRightImgClick = () => {},
    onBlur = () => {},
    imageWidth,
    fieldWidth,
    imageStyle
}) => {
    const [hidePswrdText, setHidePswrdText] = useState(true);
    const showErrMsg = showError;

    return (
        <View style={[{ marginBottom: 16 }, containerStyle]}>
            {pickerLabel && 
                <Text style={[CustomStyling.titleMed18, {marginBottom: 4, color: color.fieldBorder}, pickerLabelStyle]}> 
                    {pickerLabel} 
                </Text>
            }
            <View style={[styles.container, {borderColor: showErrMsg ? color.errorText : (fieldColor != null) ? fieldColor : color.fieldBorder, paddingHorizontal: leftImagePath ? 4:16}, viewStyle]}>
                {(leftImagePath != null) ? 
                    <Image
                        source={leftImagePath}
                        resizeMode={"contain"}
                        style={[CustomStyling.fieldSubView, {width: imageWidth ? imageWidth : "10%"}, imageStyle]}
                    />
                    : null
                }
                <TextInput
                    style={[CustomStyling.fieldText, { width: fieldWidth ? fieldWidth : (leftImagePath != null) ? ((isPasswordField || (rightImagePath != null)) ? '80%' : '90%') : ((isPasswordField || (rightImagePath != null)) ? '90%' : '100%'), marginLeft: leftImagePath? 4: 0}, textInputStyle]}
                    multiline={textInputMultiline}
                    numberOfLines={textInputLines}
                    autoCapitalize = {charCapital ? "characters" : "sentences"}
                    placeholder={placeholder}
                    onPressIn={() => onStart()}
                    onChangeText = {val => {onTextChange(val);
                        onBlur(val);
                    }}
                    onEndEditing = {val => {onEditingEnd()}}
                    maxLength = {maxlength ? maxlength : null}
                    editable={editable}
                    keyboardType={keyboardType}
                    defaultValue={defaultValue}
                    value={value}
                    secureTextEntry={(isPasswordField || doHideContent) ? hidePswrdText : false}
                    color={color.fieldBlack}
                    placeholderTextColor={placeholder ? placeholder : color.placeholder}
                    textAlignVertical={(alignTextVert) ? alignTextVert : "center"}                
                />
                {(isPasswordField) ? 
                    <ImageButton
                        image={hidePswrdText ? ImagesPath.eye : ImagesPath.slashEye}
                        size={20}
                        tintColor={color.mainColor}
                        container={{width: '10%'}}
                        onPress={() => setHidePswrdText(!hidePswrdText)}
                    />
                    : null
                }

                {(rightImagePath != null) ? 
                    <ImageButton
                        image={rightImagePath}
                        size={16}
                        container={[CustomStyling.fieldSubView, {width: imageWidth ? imageWidth : "10%"}]}
                        onPress={() => onRightImgClick()}
                    />
                    : null
                }
            </View>
            {(showErrMsg) ? <Text style={CustomStyling.ErrorText}>{errorText}</Text>:null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 44, 
        backgroundColor: color.white,
        borderWidth:1, 
        borderColor: color.fieldBorder, 
        borderRadius: 10, 
        width: "100%",
        paddingHorizontal: 4, flexDirection: "row", justifyContent: "flex-start", alignItems: "center"
    }
});

export default CustomTextField;