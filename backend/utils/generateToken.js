import jwt from "jsonwebtoken";

const generateToken = (id, res) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d", // updated from 15d to 7d
  });

  res.cookie("token", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // updated maxAge accordingly
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production", // optional for production
  });

  return token; // optional, if you want to use it in response
};

export default generateToken;
