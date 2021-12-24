import Conversation from "../models/Conversation.js";

export const newConversation = async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getConv = async (req, res) => {
  try {
    const conservation = await Conversation.find({
      members: { $in: req.params.userId },
    });
    res.status(200).json(conservation);
  } catch (error) {
    res.status(500).json(error);
  }
};
