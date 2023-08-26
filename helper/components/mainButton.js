import React from "react"
import { Text, TouchableOpacity, Image } from "react-native"
import { color } from "../Common/Colors"
import { CustomStyling } from "../CustomStyle/CustomStyling"
 
export const MainButton = ({text,onPress,viewStyle, disabled, textStyle, leftImage, tintColor, rightImage, imageStyle, size}) =>{
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style = {[CustomStyling.mainButtonContainer, {opacity: disabled ? 0.5: 1.0, flexDirection: "row"}, viewStyle]}>
            {leftImage && 
            <Image
                    source = {leftImage}
                    resizeMode = {"contain"}
                    style={[{width: 16, height: 16, tintColor: tintColor ? tintColor : color.white}, imageStyle]}
                />
            }
                {text && <Text style = {[CustomStyling.mainButtonText, textStyle, {marginLeft: leftImage?8:0}]}>
                    {text}
                </Text>}
                {rightImage ? <Image
                    source = {rightImage}
                    resizeMode = {"contain"}
                    style={[{width: 16, height: 16, marginLeft: 8}, imageStyle]}
                />
                : null}
        </TouchableOpacity>
    )
}