// screens/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { fetchTeams, deleteTeam } from '../api';

export default function HomeScreen({ navigation }) {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    loadTeams();
  }, []);

  const loadTeams = async () => {
    const data = await fetchTeams();
    setTeams(data);
  };

  const handleDelete = async (id) => {
    await deleteTeam(id);
    loadTeams();
  };

  return (
    <View>
      <FlatList
        data={teams}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TeamDetails', { id: item.id })}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Button title="Eliminar" onPress={() => handleDelete(item.id)} />
          </TouchableOpacity>
        )}
      />
      <Button
        title="Agregar Nuevo Equipo"
        onPress={() => navigation.navigate('AddTeam')}
      />
    </View>
  );
}