import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  // next is a callback to proceed to the next middleware
  try {
    // you will get the token from cookies 
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    };

    // verify the token
    const decode = jwt.verify(token, process.env.SECRET_KEY);

    if (!decode) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    };

    req.id = decode.userId; // setting the userId in the req object

    next(); // proceed to the next middleware


  } catch (error) {
    console.log(error);
  }
};


export default isAuthenticated;