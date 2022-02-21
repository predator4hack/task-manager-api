const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "chandankumar.191ee114@nitk.edu.in",
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name}. Let me know how to get along with the app`,
    });
};

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "chandankumar.191ee114@nitk.edu.in",
        subject: "Sorry to see you go!",
        text: `Goodbye, ${name}, I hope to see you back sometime soon`,
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail,
};
