import React, { useState } from "react";
import Toast from "react-native-toast-message";
import { useAuthStore } from "../../../store";
import { createUserWithEmailPass } from "../../../services/FirebaseAuthManager";
import { OnboardingComp } from "../../../components";

const SignUpPassword = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const { updateUser, onboardedUser } = useAuthStore();

  const handleNext = async () => {
    if (onboardedUser.password.length < 5) {
      Toast.show({
        type: "error",
        text1: "Invalid password",
        text2: "Your password should be at least 5 characters long!",
      });
      return;
    }

    setLoading(true);

    const data = {
      email: onboardedUser.email,
      admin: false,
    };

    await createUserWithEmailPass(
      onboardedUser.email,
      onboardedUser.password,
      data,
      (response, success) => {
        if (success) {
          updateUser(response);
        } else {
          Toast.show({
            type: "error",
            text1: "Error",
            text2: response,
          });
        }
        setLoading(false);
      }
    );
  };

  const handleLinkBtn = () => {
    navigation.navigate("SignInEmail");
  };

  return (
    <OnboardingComp
      fieldName={"password"}
      headText={"Insert your Password"}
      placeholder={"Password"}
      inputText={"Insert secure password linked to your account"}
      linkText={"Dont't have an account?"}
      linkBtnText={"Sign In"}
      handleSubmit={handleNext}
      btnText={"Sign Up"}
      loading={loading}
      handleLinkBtn={handleLinkBtn}
    />
  );
};

export default SignUpPassword;
