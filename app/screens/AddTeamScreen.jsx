// screens/AddTeamScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { addTeam } from '../api';

export default function AddTeamScreen({ navigation }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [points, setPoints] = useState('');
  const [goals, setGoals] = useState('');

  const handleSubmit = async () => {
    await addTeam({ name, description, points: parseInt(points), goals: parseInt(goals) });
    navigation.goBack();
  };

  return (
    <View>
      <TextInput placeholder="Nombre" value={name} onChangeText={setName} />
      <TextInput placeholder="Descripción" value={description} onChangeText={setDescription} />
      <TextInput placeholder="Puntos" value={points} onChangeText={setPoints} keyboardType="numeric" />
      <TextInput placeholder="Goles" value={goals} onChangeText={setGoals} keyboardType="numeric" />
      <Button title="Agregar" onPress={handleSubmit} />
    </View>
  );
}