import { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Input, Events, CustomModal } from "./components/index";

export default function App() {
  const [text, setText] = useState("");
  const [events, setEvents] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const onAddEvent = () => {
    if (text.length === 0) return;
    setEvents([
      ...events,
      {
        id: Math.random().toString(),
        value: text,
      },
    ]);
    setText("");
  };

  const onHandlerEvent = (id) => {
    setModalVisible(!modalVisible);
    const selectedEvent = events.find((event) => event.id === id);
    setSelectedEvent(selectedEvent);
  };

  const onHandlerCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedEvent(null);
  };

  const onHandlerDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>LISTA DE EVENTOS</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          buttonColor="#1F8378"
          buttonTitle="Agregar"
          onChangeText={(text) => setText(text)}
          onHandlerButton={onAddEvent}
          placeholder="Ingrese un evento"
          value={text}
        />
      </View>
      <View style={styles.listContainer}>
        <Events events={events} onSelectItem={onHandlerEvent} />
      </View>
      <CustomModal
        isVisible={modalVisible}
        animationType="slide"
        onCancel={onHandlerCancelModal}
        onDelete={onHandlerDeleteEvent}
        selectedEvent={selectedEvent}
      />
    </View>
  );
}
