import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuthStore } from "../store";
import { LinearComp, Loader, CustomText, AnimatedScreen } from "./index";

const OnboardingComp = ({
  fieldName,
  headText,
  placeholder,
  inputText,
  linkText,
  linkBtnText,
  handleSubmit,
  btnText,
  loading,
  handleLinkBtn,
}) => {
  const navigation = useNavigation();

  const { onboardedUser, setOnboardedUser } = useAuthStore();

  return (
    <AnimatedScreen classes="space-y-6 relative">
      <View className="w-full items-start">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className={"mt-5 w-10 h-10"}
        >
          <View className={""}>
            <FontAwesomeIcon size={20} icon={faChevronLeft} />
          </View>
        </TouchableOpacity>
      </View>
      <CustomText classes="font-bold text-xl text-text-1">
        {headText}
      </CustomText>
      <TextInput
        className={
          "mt-10 text-2xl font-bold w-full h-14 text-bg-4 rounded-xl p-2 text-center border-border-1 border-b-2"
        }
        onChangeText={(text) =>
          setOnboardedUser({
            ...onboardedUser,
            [fieldName]: text,
          })
        }
        value={onboardedUser[fieldName]}
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        secureTextEntry={fieldName === "password"}
      />

      <CustomText classes="font-medium text-sm text-center text-text-2">
        {inputText}
      </CustomText>

      <View className="flex flex-row items-center">
        <CustomText classes="text-xs font-medium">{linkText}</CustomText>
        <TouchableOpacity onPress={handleLinkBtn}>
          <CustomText classes="text-xs font-medium text-bg-5 ml-2">
            {linkBtnText}
          </CustomText>
        </TouchableOpacity>
      </View>

      <View />
      <View className={`absolute w-full items-end justify-end bottom-4`}>
        <LinearComp>
          <TouchableOpacity
            className={"flex justify-center w-full h-14 rounded-xl"}
            onPress={handleSubmit}
          >
            <CustomText classes="font-bold text-lg text-bg-4 text-center">
              {btnText}
            </CustomText>
          </TouchableOpacity>
        </LinearComp>
      </View>
      <Loader loading={loading} />
    </AnimatedScreen>
  );
};

export default OnboardingComp;
