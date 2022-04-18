const registerEmailTemplate = (email, name, token) => {
  return (mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: email,
    subject: "Welcome to xyz!",
    html:
      "<p>Hi " +
      name +
      `, You have completed one step of registration. </p><p>Please click <a href="${process.env.BASE_URL}` +
      "user/" +
      token +
      '">&nbsp;here&nbsp;</a> to verify yourself.</p>',
  });
};

const forgetPassEmailTemplate = (email, token) => {
  return (mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: email,
    subject: "Reset your password!",
    html:
      `<p>Hi user, Please click <a href='${process.env.BASE_URL}` +
      "reset-password/" +
      token +
      "'>&nbsp;here&nbsp;</a> to reset your password. </p>",
  });
};

module.exports = { registerEmailTemplate, forgetPassEmailTemplate };
