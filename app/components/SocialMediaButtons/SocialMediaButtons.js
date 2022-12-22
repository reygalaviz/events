import React from "react";
import CustomButton from "../CustomButton";

function SocialMediaButtons({ facebook, google, apple }) {
  const onFacebookPress = () => {
    console.warn("Facebook");
  };
  const onGooglePress = () => {
    console.warn("Google");
  };
  const onApplePress = () => {
    console.warn("Apple");
  };
  return (
    <>
      <CustomButton
        bgColor="#e7eaf4"
        fgColor="#4765a9"
        onPress={onFacebookPress}
        text={facebook}
      />
      <CustomButton
        bgColor="#fae9ea"
        fgColor="#dd4d44"
        onPress={onGooglePress}
        text={google}
      />
      <CustomButton
        bgColor="#e3e3e3"
        fgColor="#363636"
        onPress={onApplePress}
        text={apple}
      />
    </>
  );
}

export default SocialMediaButtons;
