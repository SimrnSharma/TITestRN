const { StyleSheet, Dimensions } = require("react-native");
import {color} from "../Common/Colors";
import {fonts} from "../Common/fonts";

export const CustomStyling = StyleSheet.create({
    AuthNavBar: {
        title: "", headerBackTitleVisible: false, headerTintColor: color.black, headerShadowVisible: false, headerTransparent: false, headerTitleStyle: {fontSize: 18, fontFamily: fonts.medium}, headerStyle: {backgroundColor: color.white}
    },
    fieldText:{
        fontSize: 14,
        fontFamily:fonts.medium,
        height: "100%",
        borderWidth: 0,
    },
    fieldSubView:{
        width: '12%', 
        height: 20,
        justifyContent: "center",
    },
     ErrorText: {
        fontSize: 14, 
        fontFamily: fonts.medium, 
        color: color.red, 
        marginTop: 4,
        marginLeft: 4, 
    },
    mainButtonContainer: {
        backgroundColor: color.button,
        marginTop: 12,
        borderRadius: 25,
        borderWidth: 0,
        borderColor: color.buttonBorder,
        height: 50,
        width: "100%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
   
    mainButtonText: {
        fontSize: 18, 
        fontFamily: fonts.regular, 
        color: color.buttonText,
        textAlign: "center"
    },
    textButtonText: { 
        fontSize: 14, 
        fontFamily: fonts.semiBold, 
        color: color.button,
    },
    rowCenterSpaced: {
        flexDirection: "row", alignItems: "center", justifyContent: "space-between"
    },
    rowAlignCenter: {flexDirection: "row", alignItems: "center"},
    titleSb20: {
        fontFamily: fonts.semiBold, fontSize:20, color: color.titleBlack
    },
    titleMed18: {
        fontFamily: fonts.medium,
        fontSize: 18,
        color: color.titleBlack,
    },
    titleMed16: {
        fontFamily: fonts.medium,
        fontSize: 16,
        color: color.titleBlack,
    },
    titleMed14:{
        fontFamily: fonts.medium,
        fontSize: 14,
        color: color.titleBlack,
    },
    titleReg14: {
        fontFamily: fonts.regular,
        fontSize: 14,
        color: color.titleBlack,
    },
});
