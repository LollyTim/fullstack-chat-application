import User from "../models/user.model.js";

export const signup = async (res, req) => {
  try {
    const { firstName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    }
    const user = await User.findOne(username);

    if (user) {
      return res.status(409).json({ message: "Username already exists" });
    }
  } catch (error) {
    console.log(error);
  }
};
export const login = (res, req) => {
  console.log("Login Routes");
};
export const logout = (res, req) => {
  console.log("Loogout Routes");
};
