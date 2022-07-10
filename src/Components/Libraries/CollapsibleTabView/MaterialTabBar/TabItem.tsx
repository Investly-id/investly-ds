// @ts-nocheck
import React from "react";
import { StyleSheet } from "react-native";
import Ripple from "./Libraries/ButtonRipple";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

import { TabName } from "../types";
import { MaterialTabItemProps } from "./types";

export const TABBAR_HEIGHT = 48;
const DEFAULT_COLOR = "rgba(0, 0, 0, 1)";

/**
 * Any additional props are passed to the pressable component.
 */
export const MaterialTabItem = <T extends TabName = any>({
  name,
  index,
  onPress,
  onLayout,
  scrollEnabled,
  indexDecimal,
  label,
  style,
  labelStyle,
  activeColor = DEFAULT_COLOR,
  inactiveColor = DEFAULT_COLOR,
  pressColor = "#DDDDDD",
  badgeLabel,
  ...rest
}: MaterialTabItemProps<T>): React.ReactElement => {
  const stylez = useAnimatedStyle(() => {
    return {
      opacity: 1,
      color:
        Math.abs(index - indexDecimal.value) < 0.5
          ? activeColor
          : inactiveColor,
    };
  }, []);

  const styleBadge = useAnimatedStyle(() => {
    return {
      backgroundColor:
        Math.abs(index - indexDecimal.value) < 0.5 ? activeColor : "#E2E2E4",
      width: 20,
      height: 20,
      borderRadius: 10,
      marginLeft: 8,
      justifyContent: "center",
      alignItems: "center",
    };
  }, []);

  const styleBadgeLabel = useAnimatedStyle(() => {
    return {
      color:
        Math.abs(index - indexDecimal.value) < 0.5 ? "white" : inactiveColor,
      fontSize: 10,
      lineHeight: 18,
      fontFamily: "Inter-Bold",
    };
  }, []);
  return (
    <Ripple
      onLayout={onLayout}
      style={[
        { opacity: 1 },
        !scrollEnabled && styles.grow,
        styles.item,
        style,
      ]}
      onPress={() => onPress(name)}
      // android_ripple={{
      //   borderless: true,
      //   color: pressColor,
      // }}
      {...rest}
    >
      <Animated.Text style={[styles.label, stylez, labelStyle]}>
        {label}
      </Animated.Text>
      {!!badgeLabel && (
        <Animated.View style={[styleBadge]}>
          <Animated.Text style={[styleBadgeLabel]}>{badgeLabel}</Animated.Text>
        </Animated.View>
      )}
    </Ripple>
  );
};

const styles = StyleSheet.create({
  grow: {
    flex: 1,
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    height: TABBAR_HEIGHT,
    flexDirection: "row",
  },
  label: {
    margin: 4,
  },
});
