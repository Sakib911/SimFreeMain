import React, { useState } from "react";
import Toast from "react-native-toast-message";
import { useAuthStore } from "../../../store";
import { signinWithEmailPass } from "../../../services/FirebaseAuthManager";
import { OnboardingComp } from "../../../components";
import { Alert } from "react-native";

const SignUpPassword = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const { updateUser, onboardedUser } = useAuthStore();

  const handleNext = async () => {
    if (onboardedUser.password.length < 5) {
      Alert.alert(
        "Password too short",
        "Password must be at least 6 characters long"
      );

      return;
    }

    setLoading(true);

    await signinWithEmailPass(
      onboardedUser.email,
      onboardedUser.password,
      (userData, success) => {
        if (success) {
          updateUser(userData);
        } else {
          Toast.show({
            type: "error",
            text1: "Error",
            text2: userData,
          });

        }
        setLoading(false);
      }
    );
  };

  const handleLinkBtn = () => {
    navigation.navigate("SignUpEmail");
  };

  return (
    <OnboardingComp
      fieldName={"password"}
      headText={"Insert your Password"}
      placeholder={"Password"}
      inputText={"Insert secure password linked to your account"}
      linkText={"Dont't have an account?"}
      linkBtnText={"Sign Up"}
      handleSubmit={handleNext}
      btnText={"Sign In"}
      loading={loading}
      handleLinkBtn={handleLinkBtn}
    />
  );
};

export default SignUpPassword;
