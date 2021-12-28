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
export const getTwoUserConv = async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json(error);
  }
};
