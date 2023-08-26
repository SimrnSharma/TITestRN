import React, {useState, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, FlatList } from 'react-native';
import { apiCall } from "../../helper/utils/httpClient";
import apiEndPoints from "../../helper/utils/apiEndPoints";
import Toast from 'react-native-toast-message';
import { PostCell } from "../../helper/components/PostCell";
import { ViewStyle } from "../../helper/CustomStyle/ViewStyles";

const PostsView = ({navigation=useNavigation()}) => {
    const [postData, setPostData] = useState([]);    
    const [viewData, setViewData] = useState([]);    
    const [isRefreshing, setRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [offset, setOffset] = useState("");
    const [loadMore, setLoadMore] = useState(false);
   
    useEffect(() => {
        setIsLoading(true);
        getPostsApi();
    }, []);

    const getPostsApi = async() => {
        try {
            const {data, status} = await apiCall("GET", apiEndPoints.posts, null);
            if (status == 200){
                setPostData(data);
                if (data.length > 20){
                    setViewData(data.slice(0, 20));
                    setOffset(20);
                    setLoadMore(true);
                }
                else{
                    setViewData(data);
                    setLoadMore(false)
                }
            }
            else{
                Toast.show({type: "error", text1: data.message});
            }        
        } catch (error) {
            Toast.show({type: "error", text1: "Something went wrong"})
        } finally {
            setIsLoading(false);
            setRefreshing(false);
        }
    };

    const loadMoreData = () => {
        if (postData.length > offset+20){
            setViewData(postData.slice(0, offset+20));
            setOffset(offset+20);
            setLoadMore(true);
        }
        else{
            setViewData(postData);
            setLoadMore(false)
        }
    };

    const refreshView = React.useCallback(() => {
        setRefreshing(true);
        getPostsApi();
    }, []);

    return(
        <View style={ViewStyle.mainView}> 
            {isLoading ? 
                <View style={{}}>
                    {[...Array(10)].map((item, index) => (
                        <PostCell
                            showSkeleton={true}
                        />
                    ))}
                </View>
                : viewData.length > 0 ?
                <FlatList
                    data={viewData}
                    keyExtractor={({id}, index) => id}
                    refreshing={isRefreshing}
                    renderItem={({item}) => (
                        <PostCell
                            data={item}
                            onPress={() => {
                                navigation.navigate("PostDetail", {data: item})
                            }}
                        />
                    )}
                    onEndReached={() => {
                        if(loadMore){
                            loadMoreData();
                        }
                    }}
                    onRefresh={() => {
                        refreshView()
                    }}
                />
                :
                <Text style={ViewStyle.noDataLbl}>
                    No post found
                </Text>
            }
        </View>
    );
};

export default PostsView;