const { StyleSheet } = require("react-native");
import {color} from "../Common/Colors";
import { fonts } from "../Common/fonts";
import { CustomStyling } from "./CustomStyling";


export const ViewStyle = StyleSheet.create({
    mainView: {flex: 1, backgroundColor: color.white},
    backgroundImg: {width: "100%", height: "100%"},
    overView: {position: "absolute", paddingTop: 24, alignItems: "center", height: '100%', width: '100%'},
    logoTitle: {marginVertical: '35%', fontFamily: fonts.bold, fontSize: 40, color: color.white},
    fieldsView: {width: '100%',  paddingHorizontal: 24, marginTop: "-8%", borderTopLeftRadius: 24, borderTopRightRadius: 24, backgroundColor: color.white},
    fieldView: {alignItems: "center", width: "100%", marginTop: 40},
    loginField: {backgroundColor: color.fieldGray, borderWidth: 0, height: 48, borderRadius: 24, paddingHorizontal: 16},
    forgotPswrd: {alignSelf: 'flex-end', marginTop: 12, marginBottom: 16},
    forgotPswrdTitle: {fontFamily: fonts.regular, color: color.blue},
    signupView: [CustomStyling.rowAlignCenter, {marginTop: "10%", alignSelf: "center", marginBottom: 40}],
    signUpTitle: CustomStyling.titleReg14,
    signupBtn: CustomStyling.titleMed16,
    noDataLbl: [CustomStyling.titleSb20, {marginTop: "40%", alignSelf: "center"}],
    skeletonCell: {marginHorizontal: 24, marginVertical: 8, padding: 12, borderWidth: 1, borderRadius: 8},
    postCell: {marginHorizontal: 24, marginVertical: 8, padding: 12, borderWidth: 0.2, borderRadius: 8, borderColor: color.subtitleBlack, shadowColor: color.shadow, shadowOpacity: 0.25, shadowOffset: {height:1, width: 0}, shadowRadius: 4, elevation: 4, backgroundColor: color.white},
    postTitle: CustomStyling.titleMed14,
    postSubtitle: [CustomStyling.titleReg14, {marginTop: 4, color: color.subtitleBlack}],
});