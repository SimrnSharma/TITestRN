import React from "react"
import { Text, TouchableOpacity, View, Image } from "react-native"
import { color } from "../Common/Colors"
import { CustomStyling } from "../CustomStyle/CustomStyling"

export const TextButton = ({
    leftImage,
    rightImage,
    size,
    tintColor,
    text,
    onPress,
    viewStyle,
    textStyle,
    showUnderLine,
    imgStyle,
    disabled
}) =>{
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={[{flexDirection: "row", justifyContent: "center", alignItems: "center", opacity: disabled ? 0.5 : 1}, viewStyle]}>
            {leftImage && 
                <Image
                    source={leftImage}
                    resizeMode={"contain"}
                    style={[{width: size ? size : 14, height: size ? size : 14, tintColor: tintColor ? tintColor : null}, imgStyle]}
                />
            }
            <Text style = {[CustomStyling.textButtonText, {marginLeft: leftImage ? 4:0, textDecorationLine: showUnderLine ? 'underline' : 'none'}, textStyle]}>{text}</Text>
            {rightImage && 
                <Image
                    source={rightImage}
                    resizeMode={"contain"}
                    style={[{width: size ? size : 14, height: size ? size : 14, tintColor: tintColor ? tintColor : null}, imgStyle]}
                />
            }
            {/* {(showUnderLine) ? <View style={{height: 3, width: "80%", marginTop: 4, borderRadius: 2, backgroundColor: color.white, alignSelf: "center"}}/> : null} */}
        </TouchableOpacity>
    )
}