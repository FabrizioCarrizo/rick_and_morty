const users = require("../utils/users");

function loginHandler(req, res) {
  console.log('req-->',req);
  return res.send('Hellooo')

  let user = req;
  if (user.email === users[0].email && user.password === users[0].password) {
    res.status(200).send({ acces: "true" });
  } else res.status(200).send({acces: 'false'});

  console.log(
    "users--->",
    users.map((user) => console.log(user.email))
  );
}


module.exports={loginHandler}