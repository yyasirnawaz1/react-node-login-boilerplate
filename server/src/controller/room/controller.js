export const getRooms = (req, res) => {
  res.send('return all rooms:....');
};

export const getRoom = (req, res) => {
  const { id } = req.params;
  res.send(`room id is:.... ${id}`);
};
