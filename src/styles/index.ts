import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    color: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  vstack: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  p: {
    textAlign: "center",
    color: "black",
    fontSize: 14
  }

});

export {
    styles
}