const { Router } = require('express');
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} = require("../controllers/users")

const router = Router();
router.post('/', createUser);
router.get('/', getUsers);
router.get('/:userId', getUserById);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

module.exports = router;