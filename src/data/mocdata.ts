const data = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  name: `Utilisateur ${i + 1}`,
  email: `user${i + 1}@exemple.com`,
}));

export default data;
