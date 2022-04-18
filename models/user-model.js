const ajvInstance = require("./ajv-intance");

const userSchema = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    phoneNumber: { type: "number" },
    firstName: { type: "string" },
    lastName: { type: "string" },
    password: { type: "string" },
    confirmPassword: { type: "string" },
  },

  required: ["firstName", "password", "confirmPassword"],
};

module.exports = ajvInstance.compile(userSchema);

// const { encrypt } = require("../utils/encrypt");

// userSchema.pre("save", async function (next) {
//   this.password = await encrypt(this.password);
//   next();
// });

// const User = new mongoose.model("user", userSchema);

// module.exports = { User };
