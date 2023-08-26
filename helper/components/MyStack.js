import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginView from "../../Views/Task1/Login";
import PostsView from "../../Views/Task2/Posts";
import { CustomStyling } from "../CustomStyle/CustomStyling";
import PostDetailView from "../../Views/Task2/PostDetail";

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

export const MyStack = () => {

    return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Auth" component={AuthStackNavigator} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    };

    const AuthStackNavigator = () => {
        return(
            <AuthStack.Navigator> 
                <AuthStack.Screen name="Login" component={LoginView} options={{headerShown:false}}/>
                <AuthStack.Screen name="Posts" component={PostsView} options={{...CustomStyling.AuthNavBar, title: 'Posts'}}/>
                <AuthStack.Screen name="PostDetail" component={PostDetailView} options={{...CustomStyling.AuthNavBar, title: 'Post Detail'}}/>
            </AuthStack.Navigator>
        )
    };