import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { TINT_COLOR, BG_COLOR } from "../constants/Colors";
import styled from "styled-components";

export default () => (
  <View style={styles.container}>
    <ActivityIndicator color={TINT_COLOR} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "space-between"
  }
});
