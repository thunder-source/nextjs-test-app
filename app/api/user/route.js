const user = [
  { id: 1, name: 'John Doe 1' },
  { id: 2, name: 'Jane Doe 2' },
  { id: 3, name: 'Josh Doe 3' },
  { id: 4, name: 'Jill Doe 4' },
];

export async function GET(response) {
  return new Response(JSON.stringify(user));
}
