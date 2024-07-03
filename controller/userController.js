const userService = require("../service/userService");
const catchSync = require("../utils/catchSync");

const getAll = catchSync(async (req, res) => {
  const users = await userService.getAllUsers();

  res.json({ data: users });
});

const add = catchSync(async (req, res) => {
  const user = await userService.createNewUser(res.body);

  res.json({data: user});
});

module.exports = {
  getAll,
  add,
};
