class UserController {
  async store(req, res) {
    const id = Math.floor(Math.random() * 100 + 1);
    const data = {
      id,
      name: 'Maurivan Luiz',
      photo: {
        uri: `http://api.adorable.io/avatars/90/${id}@adorable.png`,
      },
    };
    return res.json(data);
  }
}

export default new UserController();
