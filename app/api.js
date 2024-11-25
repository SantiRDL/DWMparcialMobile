// api.js
const BASE_URL = 'http://161.35.143.238/srodriguez';

export async function fetchTeams() {
  const response = await fetch(BASE_URL);
  return response.json();
}

export async function fetchTeam(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json();
}

export async function addTeam(team) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(team),
  });
  return response.json();
}

export async function deleteTeam(id) {
  await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
}

export async function updateTeam(id, team) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(team),
  });
  return response.json();
}