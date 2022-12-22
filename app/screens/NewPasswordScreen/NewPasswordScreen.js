import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import constants from "../../constants/constants";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

function NewPasswordScreen({ navigation }) {
  const [code, setCode] = useState("");
  const [newpass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");

  const onSubmitCode = () => {
    navigation.navigate("SignInScreen");
  };
  const onBackSignIn = () => {
    navigation.navigate("SignInScreen");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>New Password</Text>
        </View>

        <CustomInput
          placeholder="Enter verification code"
          value={code}
          setValue={setCode}
          enabled
        />
        <CustomInput
          placeholder="New Password"
          value={newpass}
          setValue={setNewPass}
          secureTextEntry
          enabled
        />
        <CustomInput
          placeholder="Confirm Password"
          value={confirm}
          setValue={setConfirm}
          secureTextEntry
          enabled
        />

        <CustomButton onPress={onSubmitCode} text="Submit" />
        <CustomButton text="Resend Code" type="SECONDARY" />
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

export default NewPasswordScreen;
