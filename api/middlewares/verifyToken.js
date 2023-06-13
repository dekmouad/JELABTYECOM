const jwt = require("jsonwebtoken");

// Middleware function to verify the token in the request headers

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
    // Check if the 'token' header is present in the request

  if (authHeader) {
        // Extract the token from the 'token' header

    const token = authHeader.split(" ")[1];
        // Verify the token using the secret key

    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
              // If the token is not valid, send an error response

      if (err) res.status(403).json("Token is not valid!");
      else {
                // If the token is valid, store the user object in the request and proceed to the next middleware or route handler

        req.user = user;
        next();
      } 
           
    });
  } else {
        // If the 'token' header is not present, send an unauthorized response

    return res.status(401).json("You are not authenticated!");
  }
};
// Middleware function to verify the token and authorization based on user ID or admin role

const verifyTokenAndAuthorization = (req, res, next) => {
    // Verify the token first

  verifyToken(req, res, () => {
        // Check if the user ID matches the requested ID or if the user is an admin

    if (req.user.id === req.params.id || req.user.isAdmin) {
            // If authorized, proceed to the next middleware or route handler

      next();
    } else {
            // If not authorized, send a forbidden response

      res.status(403).json("You are not alowed to do that!");
    }
  });
};
// Middleware function to verify the token and admin role

const verifyTokenAndAdmin = (req, res, next) => {
    // Verify the token first

  verifyToken(req, res, () => {
        // Check if the user is an admin

    if (req.user.isAdmin) {
            // If the user is an admin, proceed to the next middleware or route handler

      next();
    } else {
            // If not an admin, send a forbidden response

      res.status(403).json("You are not alowed to do that!");
    }
  });
};
// Export the middleware functions

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
