// const express = require("express");
// const bcrypt = require("bcrypt");
// const UserModel = require("../modals/userModel");
// const expressAsyncHandler = require("express-async-handler");
// const generateToekn = require("../Config/generateToken");

// //Login
// const loginController = expressAsyncHandler(async (req, res) => {
//   const { name, password } = req.body;
//   const user = await UserModel.findOne({ name });

//   console.log("fetched user data", user);
//   console.log(await user.matchPassword(password));
//   if (user && (await user.matchPassword(password))) {
//     const response = {
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//       token: generateToekn(user._id),
//     };
//     console.log(response);
//     res.json(response);
//   } else {
//     res.status(401);
//     throw new Error("Invalid UserName or Password");
//   }
// });

// //Registration
// const registerController = expressAsyncHandler(async (req, res) => {
//   const { name, email, password } = req.body;

//   //check for all fields
//   if (!name || !email || !password) {
//     res.send(400);
//     throw Error("All necessary input fields have not been filled");
//   }

//   //pre-existing user
//   const userExist = await UserModel.findOne({ email });
//   if (userExist) {
//     throw new Error("User already Exists");
//   }

//   //userName already taken
//   const userNameExist = await UserModel.findOne({ name });
//   if (userNameExist) {
//     throw new Error("Username already taken");
//   }

//   //create an entry in db
//   const user = await UserModel.create({ name, email, password });
//   if (user) {
//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//       token: generateToekn(user._id),
//     });
//   } else {
//     res.status(400);
//     throw new Error("Registration Error");
//   }
// });

// const fetchAllUsersController = expressAsyncHandler(async (req,res) => {
//     const keyword = req.query.search ? {
//       $or: [
//         {name: { $regex: req.query.search, $options: "1"}},
//         { email: { $regex: req.query.search, $options: "1"}},
//       ],
//     } : {};
  
//     const users = await UserModel.find(keyword).find({
//       _id : { $ne: req.user._id},
//     });
//     res.send(users);
//   });

// module.exports = { loginController, registerController };

// const express = require("express");
// const bcrypt = require("bcrypt");
// const UserModel = require("../modals/userModel");
// const expressAsyncHandler = require("express-async-handler");
// const generateToken = require("../Config/generateToken");

// // Login
// const loginController = expressAsyncHandler(async (req, res) => {
//   const { name, password } = req.body;
//   const user = await UserModel.findOne({ name }).exec();

//   if (!user || !(await user.matchPassword(password))) {
//     res.status(401).json({ message: "Invalid username or password" });
//     return;
//   }

//   const response = {
//     _id: user._id,
//     name: user.name,
//     email: user.email,
//     isAdmin: user.isAdmin,
//     token: generateToken(user._id),
//   };
//   res.json(response);
// });

// // Registration
// const registerController = expressAsyncHandler(async (req, res) => {
//   const { name, email, password } = req.body;

//   if (!name || !email || !password) {
//     res.status(400).json({ message: "All necessary input fields have not been filled" });
//     return;
//   }

//   const userExist = await UserModel.findOne({ email });
//   if (userExist) {
//     res.status(400).json({ message: "User already exists" });
//     return;
//   }

//   const userNameExist = await UserModel.findOne({ name });
//   if (userNameExist) {
//     res.status(400).json({ message: "Username already taken" });
//     return;
//   }

//   const user = await UserModel.create({ name, email, password });
//   if (user) {
//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//       token: generateToken(user._id),
//     });
//   } else {
//     res.status(500).json({ message: "Registration error" });
//   }
// });

// const fetchAllUsersController = expressAsyncHandler(async (req,res) => {
//   const keyword = req.query.search ? {
//     $or: [
//       {name: { $regex: req.query.search, $options: "1"}},
//       { email: { $regex: req.query.search, $options: "1"}},
//     ],
//   } : {};

//   const users = await UserModel.find(keyword).find({
//     _id : { $ne: req.user._id},
//   });
//   res.send(users);
// });

// module.exports = { loginController, registerController, fetchAllUsersController };





const generateToken = require("../Config/generateToken");
const UserModel = require("../modals/userModel");
const expressAsyncHandler = require("express-async-handler");
// Login
const loginController = expressAsyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, password } = req.body;

  const user = await UserModel.findOne({ name });

  console.log("fetched user Data", user);
  console.log(await user.matchPassword(password));
  if (user && (await user.matchPassword(password))) {
    const response = {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    };
    console.log(response);
    res.json(response);
  } else {
    res.status(401);
    throw new Error("Invalid UserName or Password");
  }
});

// Registration
const registerController = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // check for all fields
  if (!name || !email || !password) {
    res.send(400);
    throw Error("All necessary input fields have not been filled");
  }

  // pre-existing user
  const userExist = await UserModel.findOne({ email });
  if (userExist) {
    // res.send(405);
    throw new Error("User already Exists");
  }

  // userName already Taken
  const userNameExist = await UserModel.findOne({ name });
  if (userNameExist) {
    // res.send(406);
    throw new Error("UserName already taken");
  }

  // create an entry in the db
  const user = await UserModel.create({ name, email, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Registration Error");
  }
});

const fetchAllUsersController = expressAsyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await UserModel.find(keyword).find({
    _id: { $ne: req.user._id },
  });
  res.send(users);
});

module.exports = {
  loginController,
  registerController,
  fetchAllUsersController,
};