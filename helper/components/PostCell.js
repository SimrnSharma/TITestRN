import React from "react"
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native"
import SkeletonPlaceholder from "react-native-skeleton-placeholder"
import { color } from "../Common/Colors"
import { CustomStyling } from "../CustomStyle/CustomStyling";
import { ViewStyle } from "../CustomStyle/ViewStyles";

export const PostCell = ({
    data,
    showSkeleton,
    onPress = () => {}
}) =>{
    if (showSkeleton){
        return(
            <View style={{width: '100%'}}>
            <SkeletonPlaceholder speed={700}>
                <View style={ViewStyle.skeletonCell}>
                    <View style={{height: 16, width:"80%"}}/>
                    <View style={{height: 16, width:"100%", marginTop: 4}}/>
                </View>
            </SkeletonPlaceholder>
            </View>
        )
    }
    else{
        return (
            <TouchableOpacity 
                style={ViewStyle.postCell}
                onPress={() => onPress()}    
            >
                <Text style={ViewStyle.postTitle} numberOfLines={1}>
                    {data?.title ?? ""}
                </Text>
                <Text style={ViewStyle.postSubtitle} numberOfLines={2}>
                    {data?.body ?? ""}
                </Text>
            </TouchableOpacity>
        )
    }
};

const styles = StyleSheet.create({

});