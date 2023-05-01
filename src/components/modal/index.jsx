import React from "react";
import { Modal, View, Text, Button } from "react-native";
import { styles } from "./styles";

const CustomModal = ({
  isVisible,
  animationType,
  selectedEvent,
  onCancel,
  onDelete,
}) => {
  return (
    <Modal visible={isVisible} animationType={animationType}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Detalle del Evento</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.detailMessage}>¿Desea eliminar este evento?</Text>
          <Text style={styles.selectedEvent}>{selectedEvent?.value}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Cancelar" color="#1F8378" onPress={onCancel} />
          <Button
            title="Eliminar"
            color="#831F1F"
            onPress={() => onDelete(selectedEvent.id)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
