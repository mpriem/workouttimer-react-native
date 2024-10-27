import colors from "./colors";
import { StyleSheet } from "react-native";

const textSizes = {
  small: 10,
  medium: 16,
  large: 24,
  heading1: 36,
  heading2: 24,
  heading3: 16,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainColors.background,
  },
  header: {
    icons: {
      menuSize: textSizes.large,
      
      color: colors.mainColors.primaryFont,
    },
    flex: 0.1,
    flexDirection: "row",
    backgroundColor: colors.mainColors.background,
    justifyContent: "space-between",
    alignItems: "center",
    text: {
      fontSize: textSizes.medium,
      color: colors.mainColors.primaryFont,
    },
    padding: 20,
    paddingTop: 0,
  },
  content: {
    flex: 1,
  },
  footer: {
    flex: 0.1,
    backgroundColor: colors.mainColors.background,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
