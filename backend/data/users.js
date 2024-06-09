const bycrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bycrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Cao Nguyen Vo",
    email: "caonguyen@email.com",
    password: bycrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "TienDucNguyen",
    email: "tienduc@email.com",
    password: bycrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

module.exports = users;
