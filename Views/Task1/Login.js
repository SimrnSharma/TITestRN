import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, ScrollView, Alert } from 'react-native';
import CustomTextField from "../../helper/components/CustomTextField";
import { ImagesPath } from "../../assets/Icons/ImagesPath";
import { MainButton } from "../../helper/components/mainButton";
import { TextButton } from "../../helper/components/TextButton";
import { Formik } from "formik";
import * as yup from 'yup';
import { ViewStyle } from "../../helper/CustomStyle/ViewStyles";

const LoginView = ({navigation=useNavigation()}) => {
    const [showErrorMsg, setShowErrMsg] = useState(false);

    useEffect(() => {
        setShowErrMsg(false);
    }, []); 

    const loginValidationsSchema = yup.object().shape({
        email: yup
          .string()
          .email("Please enter valid email")
          .required('Please enter email'),
        password: yup
          .string()
          .min(6, ({ min }) => `Please enter password of at least ${min} characters`)
          .required('Please enter password'),
    });

    return(
        <Formik
            validationSchema={loginValidationsSchema}
            initialValues={{ email: '', password: '' }}
            initialErrors={{email: "Please enter email", password: "Please enter password"}}
            onSubmit={values => {
                console.log("TAPPED");
                showLoader();
                LoginApi(values.email, values.password);
            }}
        >
            {({handleChange, values, errors, isValid=false,}) => (
                <View style={ViewStyle.mainView}>
                    <Image
                        source={ImagesPath.background}
                        resizeMode="cover"
                        style={ViewStyle.backgroundImg}
                    />
                    <View style={[ViewStyle.overView]}>
                        <Text style={ViewStyle.logoTitle}>
                            TOGETHER
                        </Text>
                        <ScrollView style={[ViewStyle.fieldsView]}>
                            <View style={ViewStyle.fieldView}>
                                <CustomTextField
                                    placeholder={"Email"}
                                    leftImagePath={ImagesPath.mail}
                                    viewStyle={ViewStyle.loginField}
                                    defaultValue={values.email}
                                    keyboardType={"email-address"}
                                    onTextChange={handleChange("email")}
                                    errorText={errors.email}
                                    showError={ showErrorMsg && errors.email }
                                />
                                <CustomTextField
                                    placeholder={"Password"}
                                    leftImagePath={ImagesPath.password}
                                    isPasswordField={true}
                                    viewStyle={ViewStyle.loginField}
                                    defaultValue={values.password}
                                    onTextChange={handleChange("password")}
                                    errorText={errors.password}
                                    showError={ showErrorMsg && errors.password }
                                />
                                <MainButton
                                    text={"Sign In"}
                                    onPress={() => {
                                        if(isValid){
                                            setShowErrMsg(true)
                                            if(values.email.toLowerCase() == "user@gmail.com" && values.password == "123456"){
                                                Alert.alert(
                                                    "Login successful",
                                                    "Would you like to view task2",
                                                    [
                                                      {
                                                        text: "Yes",
                                                        onPress: () => navigation.navigate("Posts"),
                                                        style: "cancel"
                                                      },
                                                      {
                                                        text: "Cancel",
                                                        style: "cancel"
                                                      }
                                                    ]
                                                );
                                            }
                                            else{
                                                Alert.alert(
                                                    "Login failed",
                                                    "Please check your login credentials",
                                                    [
                                                      {
                                                        text: "Ok",
                                                        style: "cancel"
                                                      }
                                                    ]
                                                );
                                            }
                                        }
                                        else{
                                            setShowErrMsg(true);
                                        }
                                    }}
                                />
                                <TextButton
                                    text={"Forgot Password?"}
                                    viewStyle={ViewStyle.forgotPswrd}
                                    textStyle={ViewStyle.forgotPswrdTitle}
                                    showUnderLine={true}
                                />
                            </View>
                            <View style={ViewStyle.signupView}>
                                <Text style={ViewStyle.signUpTitle}>
                                    {"Don’t have an account? "}
                                </Text>
                                <TextButton
                                    text={"Sign Up"}
                                    textStyle={ViewStyle.signupBtn}
                                    showUnderLine={true}
                                    onPress={() => {
                                    }}
                                />
                            </View>
                        </ScrollView>
                    </View>
                </View>
            )}
        </Formik>
    );
};

export default LoginView;