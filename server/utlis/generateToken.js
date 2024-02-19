import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d", // expires in 24 hours
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // ms
    httpOnly: true, // prevent xss attacks cross-site scripting attacks
    sameSite: true, // do not allow cross-site scripting
    secure: process.env.NODE_ENV !== "development", // only sent over https
  });
};

export default generateTokenAndSetCookie;
