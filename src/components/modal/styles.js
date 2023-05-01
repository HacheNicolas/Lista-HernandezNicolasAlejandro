import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CECECE",
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 30,
    color: "#1F8378",
    fontWeight: "bold",
    marginBottom: 10,
  },
  detailContainer: {
    paddingVertical: 20,
  },
  detailMessage: {
    fontSize: 18,
    color: "#1b1c1d",
  },
  selectedEvent: {
    fontSize: 18,
    color: "#1b1c1d",
    fontWeight: "bold",
    marginTop: 10,
    paddingVertical: 10,
    textAlign: "center",
    backgroundColor: "#F7F7F7",
    borderRadius: 10,
  },
  buttonContainer: {
    width: "70%",
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
