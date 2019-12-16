import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/index";
import {
  TouchableOpacity,
  StatusBar,
  Animated,
  Easing,
  Platform
} from "react-native";
import styled from "styled-components";
import Modal from "../Components/CustomModal";

export default function Home() {
  const { modal, dispatch } = useContext(Context);
  const [scale, setScale] = useState(new Animated.Value(1));
  const [opacity, setOpacity] = useState(new Animated.Value(1));

  useEffect(() => {
    StatusBar.setBarStyle("dark-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBarStyle("light-content", true);
    }
  }, []);

  useEffect(() => {
    toggleModal();
  }, [modal]);

  function toggleModal() {
    if (modal.action === "openModal") {
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in()
      }).start();

      Animated.spring(opacity, {
        toValue: 0.5
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if (modal.action === "closeModal") {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in()
      }).start();

      Animated.spring(opacity, {
        toValue: 1
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  }

  return (
    <RootView>
      <Modal />
      <AnimatedContainer style={{ transform: [{ scale }], opacity }}>
        <TouchableOpacity
          onPress={() => {
            dispatch({ type: "OPEN_MODAL" });
          }}
        >
          <ButtonText>Open Modal</ButtonText>
        </TouchableOpacity>
      </AnimatedContainer>
    </RootView>
  );
}

const RootView = styled.View`
  flex: 1;
  background: black;
`;
const Container = styled.View`
  flex: 1;
  background: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const ButtonText = styled.Text`
  font-family: sans-serif;
`;
