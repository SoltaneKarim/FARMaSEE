const User = require('../Models/userModels'); // Make sure the path is correct

async function createUser(req, res) {
  try {
    const { fullname , specificId } = req.body;

    // Ensure the request body contains the necessary properties
    if (!specificId || !fullname) {
      return res.status(400).json({ error: 'Invalid request. Please provide specificId and fullname in the request body.' });
    }

    // Create the new user with the provided specificId, fullname, and an empty messages array
    const newUser = await User.create({
      specificId: specificId,
      fullname: fullname,
      messages: [] // Empty messages array by default
    });

    res.status(201).json({ user: newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function updateUserMessages(req, res) {
  try {
    const { params, body } = req;
    const { id } = params;

    // Find the user by ID
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update the messages field with the new messages array provided in the request body
    user.messages = body.messages;

    // Save the updated user document
    const updatedUser = await user.save();

    res.status(200).json({ user: updatedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getUserByUsername(req, res) {
  try {
    const { fullname } = req.params;
    const user = await User.findOne({ fullname });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  getUserByUsername,
  updateUserMessages
};
