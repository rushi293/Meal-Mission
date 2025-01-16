export const sendToken = (user, statusCode, res, message) => {
    const token = user.getJWTToken();
    const options = {
        expiresIn: process.env.COOKIE_EXPIRE,
        httpOnly: true,
    };
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user: {
        _id: user._id,
        email: user.email,
        role: user.role // Include role in the response
      },
      message,
      token,
    });
};