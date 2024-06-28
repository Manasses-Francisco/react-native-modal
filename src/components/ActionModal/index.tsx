import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface IActionModal {
  handleClose(): void;
  handleEdit():void;
  handleDelete():void;
}

const ActionModal = ({ handleClose,handleEdit,handleDelete }: IActionModal) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.touch}
        onPress={handleClose}
      ></TouchableOpacity>

      <View style={styles.content}>
        <TouchableOpacity activeOpacity={0.9} style={styles.actionButton} onPress={handleEdit}>
          <Text style={styles.actionText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={styles.actionButton} onPress={handleDelete}>
          <Text style={[styles.actionText, styles.cancelText]}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export { ActionModal };
