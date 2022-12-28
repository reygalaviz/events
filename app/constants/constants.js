import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Platform, Dimensions } from "react-native";

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

export default {
  //intro screens
  paddingTop: Platform.OS === "ios" ? height * 0.1 : 0,
  paddingBottom: height * 0.05,
  marginBottom: height * 0.04,

  //bottom nav bar
  navMargin: height * 0.002,

  //input box
  height: height * 0.06,

  //header
  appHeader: height * 0.06,
  horPadding: width * 0.05,
  headerText: RFValue(10),
  userPaddingLeft: width * 0.02,
  locationSpacing: width * 0.01,
  cancelText: RFValue(14),
  createText: RFValue(12),

  //categories
  active: "#383838",
  inactive: "#e2e2e2",
  activeText: "white",
  inactiveText: "black",

  //divider
  marginTop: height * 0.01,

  //text size
  title: RFValue(20),
  sectionTitle: RFValue(15),
  eventTitle: RFValue(12),
  eventSubtitle: RFValue(11),
  inputBoxText: RFValue(12),
  buttonText: RFValue(12),
  subtext: RFValue(11),
  dateNum: RFValue(12),
  dateMonth: RFValue(10),

  //colors
  backgroundColor: "white",
  blueButton: "#467fd7",
  titleColor: "#555555",
  subColor: "#8d8d8d",
  titleColor: "#383838",
  sectionColor: "#555555",

  //event cards
  cardWidth: width,
  cardHeight: height * 0.3,
  cardTitle: RFValue(11),
  cardLocation: RFValue(9),
  cardPart: RFValue(11),
  avatarFontSize: RFValue(7),

  //messagebox
  messageWidth: width * 0.6,
  userText: RFValue(13),
  userMessage: RFValue(11),
  messageTime: RFValue(11),

  //notificationbox
  notiFont: RFValue(10),
  notiWidth: width * 0.4,
  notiButtonWidth: width * 0.2,
  notifButtonHeight: height * 0.029,
  notiButttonFont: RFValue(9),

  //add screen
  descriptionBox: height * 0.2,
  descriptionPadBottom: height * 0.15,
  dateBoxWidth: width * 0.45,
  //spacing
  s: 8,
  m: 15,
  l: 24,
  xl: 40,

  //layout
  padding: 25,
};
