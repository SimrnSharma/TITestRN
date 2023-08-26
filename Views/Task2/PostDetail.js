import React, {useState, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { CustomStyling } from "../../helper/CustomStyle/CustomStyling";
import { Text, View } from "react-native";
import { ViewStyle } from "../../helper/CustomStyle/ViewStyles";

const PostDetailView = ({navigation=useNavigation(), route}) => {
    const [viewData, setViewData] = useState([]);    
   
    useEffect(() => {
        setViewData(route.params?.data);
    }, []);

    return(
        <View style={[ViewStyle.mainView, {padding: 24}]}> 
            <Text style={ViewStyle.postTitle}>
                {viewData.title}
            </Text>
            <Text style={[ViewStyle.postSubtitle, {marginTop: 8}]}>
                {viewData.body}
            </Text>
        </View>
    );
};

export default PostDetailView;