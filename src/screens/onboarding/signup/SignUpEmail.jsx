import React from "react";
import { Vibration } from "react-native";
import Toast from "react-native-toast-message";
import { useAuthStore } from "../../../store";
import { OnboardingComp } from "../../../components";
import { emailRegex } from "../../../utils";

const SignUpEmail = ({ navigation }) => {
  const { onboardedUser } = useAuthStore();

  const handleNext = () => {
    const isValidEmail = emailRegex.test(onboardedUser.email);

    if (!isValidEmail) {
      Toast.show({
        type: "error",
        text1: "Invalid email",
        text2: "The email provided is incorrect!",
      });
      Vibration.vibrate();
      return;
    }

    navigation.push("SignUpPassword");
  };

  const handleLinkBtn = () => {
    navigation.navigate("SignInEmail");
  };

  return (
    <OnboardingComp
      fieldName={"email"}
      headText={"What's your Email?"}
      placeholder={"Email"}
      inputText={"Let’s create an account with your email address"}
      linkText={"Dont't have an account?"}
      linkBtnText={"Sign In"}
      handleSubmit={handleNext}
      btnText={"Next"}
      handleLinkBtn={handleLinkBtn}
    />
  );
};

export default SignUpEmail;
