import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import constants from "../../constants/constants";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialMediaButtons from "../../components/SocialMediaButtons/SocialMediaButtons";

function SignInScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPress = () => {
    navigation.navigate("HomeScreen");
  };
  const onForgotPassword = () => {
    navigation.navigate("ForgotPasswordScreen");
  };
  const onSignUpPress = () => {
    navigation.navigate("SignUpScreen");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Sign In</Text>
        </View>

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
        <CustomButton onPress={onSignInPress} text="Sign In" />
        <CustomButton
          onPress={onForgotPassword}
          text="Forgot password?"
          type="TERTIARY"
        />
        <SocialMediaButtons
          facebook="Sign In with Facebook"
          google="Sign In with Google"
          apple="Sign In with Apple"
        />

        <CustomButton
          onPress={onSignUpPress}
          text="Don't have an account? Create one"
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
});

export default SignInScreen;
