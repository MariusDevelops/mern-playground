const bcrypt = require('bcrypt');
const uid = require('uid');

const users = [];

module.exports = {
  register: async (req, res) => {
    const { email, passwordOne: password } = req.body;

    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = {
      secret: uid.uid(),
      email,
      password: hashedPass,
    };

    users.push(newUser);

    res.send({ success: true, message: '' });
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    const userExists = users.find((x) => x.email === email);

    if (!userExists)
      return res.send({ success: false, message: 'Bad credentials' });

    const passMatch = await bcrypt.compare(password, userExists.password);

    if (!passMatch)
      return res.send({ success: false, message: 'Bad credentials' });

    return res.send({ success: true, message: '', secret: userExists.secret });
  },
};
