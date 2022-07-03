const User = require('../models/user');
const createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({
        ok: false,
        msg: 'this email is already registered with another account'
      });
    }

    const user = new User({
      "name": name,
      "email": email,
      "age": age
    });

    await user.save();

    return res.json({
      ok: true,
      user
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Server Error'
    });
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json({
      ok: true,
      users
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Server Error'
    });
  }
}

const getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    return res.json({
      ok: true,
      user
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Server Error'
    });
  }
}

const updateUser = async (req, res) => {
  try {
    // We request data from the body sent to the route
    const data = req.body;
    // We use route params.
    const userId = req.params.userId;
    // We update our user
    const user = await User.findByIdAndUpdate(userId, data);
    return res.json({
      ok: true,
      user
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Server Error'
    });
  }
}

const deleteUser = async (req, res) => {
  try {
    // We use route params.
    const userId = req.params.userId;
    // We update our user
    const user = await User.findByIdAndDelete(userId)
    return res.json({
      ok: true,
      user
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Server Error'
    });
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
}