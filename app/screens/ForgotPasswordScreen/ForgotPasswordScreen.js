import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import constants from "../../constants/constants";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");

  const onSubmitEmail = () => {
    navigation.navigate("NewPasswordScreen");
  };
  const onBackSignIn = () => {
    navigation.navigate("SignInScreen");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Reset Password</Text>
        </View>

        <CustomInput
          placeholder="Email Address"
          value={email}
          setValue={setEmail}
          enabled
        />

        <CustomButton onPress={onSubmitEmail} text="Submit" />
        <CustomButton
          onPress={onBackSignIn}
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

export default ForgotPasswordScreen;
