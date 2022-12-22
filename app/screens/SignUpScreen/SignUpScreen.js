import React, { useState, useCallback, useRef } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import constants from "../../constants/constants";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialMediaButtons from "../../components/SocialMediaButtons";

function SignUpScreen({ navigation }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const bottomSheetRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const snapPoints = ["25%"];

  const onSignInPress = () => {
    navigation.navigate("SignInScreen");
  };
  const onSignUpPress = () => {
    navigation.navigate("VerifyEmailScreen");
  };
  const onTermsPress = () => {
    console.warn("Terms");
  };
  const onPrivacyPress = () => {
    console.warn("Privacy");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Create an Account</Text>
        </View>

        <CustomInput
          placeholder="First Name"
          value={fname}
          setValue={setFname}
          enabled
        />
        <CustomInput
          placeholder="Last Name"
          value={lname}
          setValue={setLname}
          enabled
        />
        <CustomInput
          placeholder="Email Address"
          value={email}
          setValue={setEmail}
          enabled
        />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
          enabled
        />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          enabled
        />
        <CustomInput
          placeholder="Confirm Password"
          value={confirm}
          setValue={setConfirm}
          secureTextEntry={true}
          enabled
        />
        <CustomButton onPress={onSignUpPress} text="Sign Up" />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsPress}>
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPress}>
            Privacy Policy
          </Text>
          .
        </Text>

        <SocialMediaButtons
          facebook="Sign Up with Facebook"
          google="Sign Up with Google"
          apple="Sign Up with Apple"
        />
        <CustomButton
          onPress={onSignInPress}
          text="Already have an account? Sign In"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.backgroundColor,
    paddingTop: constants.paddingTop,
    paddingHorizontal: constants.padding,
    marginBottom: constants.marginBottom,
  },
  header: {
    alignItems: "flex-start",
    paddingBottom: constants.paddingBottom,
  },
  title: {
    fontSize: constants.title,
    color: constants.titleColor,
  },
  text: {
    color: "gray",
    marginVertical: 5,
    fontSize: constants.subtext,
  },
  link: {
    color: "#467fd7",
    ontSize: constants.subtext,
  },
});

export default SignUpScreen;
