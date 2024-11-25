// screens/TeamDetailsScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { fetchTeam } from '../api';

export default function TeamDetailsScreen({ route, navigation }) {
  const { id } = route.params;
  const [team, setTeam] = useState(null);

  useEffect(() => {
    loadTeam();
  }, []);

  const loadTeam = async () => {
    const data = await fetchTeam(id);
    setTeam(data);
  };

  if (!team) return null;

  return (
    <View>
      <Text>{team.name}</Text>
      <Text>{team.description}</Text>
      <Text>Puntos: {team.points}</Text>
      <Text>Goles: {team.goals}</Text>
      <Button title="Editar" onPress={() => navigation.navigate('EditTeam', { id })} />
    </View>
  );
}