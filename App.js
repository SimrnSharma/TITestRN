import React from "react";
import { MyStack } from "./helper/components/MyStack";
import { color } from "./helper/Common/Colors";
import Toast, { ErrorToast } from 'react-native-toast-message';
import KeyboardManager from 'react-native-keyboard-manager';
import { StatusBar } from "react-native";
import { fonts } from "./helper/Common/fonts";

if (Platform.OS == "ios") {
    KeyboardManager.setEnable(true);
}

const App = () => {

    const toastConfig = {
        error: (props) => (
            <ErrorToast
                {...props}
                style={{ borderLeftColor: color.appErrRed, backgroundColor: color.appErrRed }}
                contentContainerStyle={{ paddingHorizontal: 12, backgroundColor: color.appErrRed, margin: 4 }}
                text1Style={{
                    fontSize: 14,
                    fontFamily: fonts.semiBold,
                    color: color.white,
                }}
                text2Style={{
                    fontSize: 14,
                    fontFamily: fonts.semiBold,
                    color: color.white,
                }}
                text1NumberOfLines={4}
            />
        ),

    };

    return (
        <>
            <MyStack />
            <StatusBar
                backgroundColor={color.white}
                barStyle="dark-content"
            />
            <Toast config={toastConfig} />
        </>
    );
};

export default App;