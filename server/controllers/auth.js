import express from "express";
import mongoose from "mongoose";
import User from "../models/User.js";

export const register = async (req, res) => {
  const user = await   new User({
    userName: "tunahan",
    email: "t@₺",
    password: "123123",
  });
  await user.save();
};
