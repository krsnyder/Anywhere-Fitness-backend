const bcrypt = require('bcryptjs');
const Users = require('./users-model');

async function validateUserId(req, res, next) {
  const { id } = req.params;
  try {
    const user = await Users.getById(id);
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(404).json({
        message: `user with id: ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
}
function validateNewUser(req, res, next) {
  next();
}
function validatePassword(req, res, next) {
  next();
}
module.exports = {
  validateNewUser,
  validatePassword,
  validateUserId,
};
