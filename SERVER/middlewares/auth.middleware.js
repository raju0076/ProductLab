import jwt from "jsonwebtoken"


export const authenticate = (req, res, next) => {
  try {
    const token = 
      req.cookies.token ||                      // check cookie
      req.header("Authorization")?.split(" ")[1]; // or check "Bearer token" header

    if (!token) {
      return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
