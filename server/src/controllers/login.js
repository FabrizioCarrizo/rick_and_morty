const users = require("../utils/users");

function loginHandler(req, res) {
  let { email, password } = req.query;
  for (let i = 0; i < users.length; i++) {
    if (email === users[i].email && password === users[i].password) {
     return res.status(200).send({ access: "true" });
    } else res.status(200).send({ access: "false" });
  }
}

module.exports = { loginHandler };
