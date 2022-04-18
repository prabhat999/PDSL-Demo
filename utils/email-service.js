const nodemailer = require("nodemailer");

const sendMail = async (emailTemplate) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail(emailTemplate, function (err, succ) {
    if (err) console.log("Error: ", err);
    else console.log("success: ", succ.response);
  });
};

module.exports = { sendMail };
