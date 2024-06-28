import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "./styles";
import { ActionModal } from "../../components/ActionModal";

const Home = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sujeito Programador</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setVisibleModal(true)}
      >
        <Text>Abrir</Text>
      </TouchableOpacity>

      <Modal
        visible={visibleModal}
        transparent={true}
        onRequestClose={() => setVisibleModal(false)}
        animationType="fade"
      >
        <ActionModal
          handleClose={() => setVisibleModal(false)}
          handleEdit={() => alert("CLICOU NO EDITAR")}
          handleDelete={() => alert("CLICOU NO DELETE")}
        />
      </Modal>
    </View>
  );
};

export { Home };
