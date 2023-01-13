import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export default {
  //intro screens
  paddingTop: Platform.OS === "ios" ? height * 0.1 : 0,
  paddingBottom: height * 0.05,
  marginBottom: height * 0.04,
  textBox: verticalScale(50),

  //header
  appHeader: verticalScale(50),
  headerAddScreen: verticalScale(20),
  headerText: RFValue(10),
  userPaddingLeft: horizontalScale(8),
  locationSpacing: horizontalScale(5),
  cancelText: RFValue(14),
  createText: RFValue(13),
  createButtonW: horizontalScale(80),
  createButtonH: verticalScale(35),

  //categories
  active: "#383838",
  inactive: "#e2e2e2",
  activeText: "white",
  inactiveText: "black",

  //divider
  marginTop: verticalScale(10),

  //text size
  title: RFValue(18),
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
  borderColor: "#555555",

  //event cards
  cardWidth: horizontalScale(270),
  cardHeight: verticalScale(250),
  cardTitle: RFValue(11),
  cardLocation: RFValue(9),
  cardPart: RFValue(11),
  avatarFontSize: RFValue(7),

  //messagebox
  messageWidth: horizontalScale(290),
  userText: RFValue(13),
  userMessage: RFValue(11),
  messageTime: RFValue(11),
  timeText: RFValue(12),

  //notificationbox
  notiFont: RFValue(10),
  notiWidth: horizontalScale(150),
  notiButtonWidth: moderateScale(70),
  notifButtonHeight: moderateScale(20),
  notiButttonFont: RFValue(9),

  //add screen
  descriptionBox: height * 0.2,
  descriptionPadBottom: height * 0.15,
  dateBoxWidth: width * 0.45,

  //profile
  editBtnWidth: horizontalScale(210),
  editBtnHeight: verticalScale(25),
  editBtnMargin: verticalScale(20),
  nameSize: RFValue(18),
  usernameSize: RFValue(12),
  bioSize: RFValue(13),
  followSize: RFValue(11),

  //bottom nav
  iconSize: moderateScale(17),

  //spacing
  s: 8,
  m: 15,
  l: 24,
  xl: 40,

  //layout
  padding: 25,
};
