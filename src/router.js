const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const mockUser = {
  username: "authguy",
  password: "mypassword",
  profile: {
    firstName: "Chris",
    lastName: "Wolstenholme",
    age: 43,
  },
};

const secret = "myownpassword999";

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  try {
    if (username === mockUser[username] && password === mockUser[password]) {
      const token = jwt.sign(username, secret);
      res.json({ data: token });
    }
  } catch (error) {
    return error;
  }
 
});

router.get("/profile", (req, res) => {
  const token = req.headers.authorization;
  console.log(token);

  jwt.verify(token, secret, function (err) {
    if (!err) {
      const myNew = mockUser.profile;
      res.json(myNew);
    } else {
      res.json(err);
    }
  });
});

module.exports = router;

/* Alternative = */
// const header = {
//     typ: "JWT",
//     alg: "HS256",
// };
// const headerCoded = btoa(JSON.stringify(header));
// const myPayload = {
//     username: "authguy"
// };
// const myPayloadcoded = btoa(JSON.stringify(myPayload));
// const signature = HMACSHA256(`${headerCoded}.${myPayloadcoded}`, "myownpassword999");
// const signatureCoded = btoa(signature);
// const jwt = `${headerCoded}.{myPayloadcoded}.${signatureCoded}`;
// console.log(jwt);
