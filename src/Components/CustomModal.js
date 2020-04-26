import React, { useState, useEffect, useContext } from "react";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components";
import { Context } from "../Context/index";
import * as Icon from "@expo/vector-icons";

const screenHeight = Dimensions.get("window").height;

export default function Modal() {
  const newAnimatedValue = new Animated.Value(900);
  const [top, setTop] = useState(newAnimatedValue);
  const { modal, dispatch } = useContext(Context);

  useEffect(() => {
    toggleModal();
  }, [modal]);

  function toggleModal() {
    if (modal.action === "openModal") {
      Animated.spring(top, {
        toValue: 174,
      }).start();
    } else if (modal.action === "closeModal") {
      Animated.spring(top, {
        toValue: screenHeight,
      }).start();
    }
  }

  return (
    <AnimatedContainer style={{ top }}>
      <Header />
      <TouchableOpacity
        onPress={() => dispatch({ type: "CLOSE_MODAL" })}
        style={{
          position: "absolute",
          top: 120,
          left: "50%",
          marginLeft: -22,
          zIndex: 1,
        }}
      >
        <CloseView>
          <Icon.Ionicons name="ios-close" size={44} color="blue" />
        </CloseView>
      </TouchableOpacity>
      <Body />
    </AnimatedContainer>
  );
}

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Header = styled.View`
  background: #333;
  height: 150px;
`;

const Body = styled.View`
  background: #eaeaea;
  height: ${screenHeight};
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
`;
