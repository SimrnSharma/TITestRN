import React from "react"
import { TouchableOpacity, Image, View } from "react-native"
import { color } from "../Common/Colors"
 
export const ImageButton = ({onPress = () => {},showBadge, container, image, imageStyle, size, tintColor}) =>{
    return (
        <TouchableOpacity onPress={() => onPress()} style={[{alignItems: "center"}, container]}>
            {image && <Image
                source={image}
                resizeMode={"contain"}
                style={[{width: size ? size:24, height: size ? size:24, tintColor: tintColor ? tintColor:null}, imageStyle]}
            />}
            {showBadge &&
                <View style={{width: 8, height: 8, borderRadius: 4, backgroundColor: color.redText, position: "absolute", alignSelf: "flex-end"}}/>}
      </TouchableOpacity>
    )
}