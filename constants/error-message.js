module.exports = {
  PASSWORD_NOT_SAME: {
    err: new Error("Both passwords does not match"),
    status: 406,
  },

  USER_NOT_VERIFIED: {
    err: new Error("User not verified"),
    status: 401,
  },

  USER_NOT_FOUND: {
    err: new Error("User not found"),
    status: 406,
  },

  WRONG_PASSWORD: {
    err: new Error("Wrong password"),
    status: 406,
  },

  INVALID_EMAIL: {
    err: new Error("Invalid email"),
    status: 406,
  },

  UNMATCHED_TOKEN: {
    err: new Error("Token does not match"),
    status: 401,
  },
};
