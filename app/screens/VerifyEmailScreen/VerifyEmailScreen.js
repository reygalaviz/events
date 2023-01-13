import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import constants from "../../constants/constants";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

function VerifyEmailScreen({ navigation }) {
  const [code, setCode] = useState("");

  const onSubmitCode = () => {
    navigation.navigate("HomeScreen");
  };

  const onSignInPress = () => {
    navigation.navigate("SignInScreen");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Verify Email Address</Text>
        </View>

        <CustomInput
          placeholder="Enter verification code"
          value={code}
          setValue={setCode}
          enabled
        />

        <CustomButton onPress={onSubmitCode} text="Submit" />
        <CustomButton text="Resend Code" type="SECONDARY" />
        <CustomButton
          onPress={onSignInPress}
          text="Back to Sign In"
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

export default VerifyEmailScreen;
