const sendgrid = require("@sendgrid/mail");

module.exports = (req, res) => {
  const { name, email, message } = JSON.parse(req.body);
  const apiKey = process.env.SENDGRID_KEY;
  sendgrid.setApiKey(apiKey);

  const msg = {
    to: {
      name: "Amit Friedberg",
      email: "im.amruth@gmail.com",
    },
    from: {
      name: `${name} via my website`,
      email: "no-reply@em1527.pillai.xyz",
    },
    replyTo: { name, email },
    subject: "new email from website",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
  };

  sendgrid.send(msg).then(
    () => res.send("Your email has been sent successfully!"),
    error => {
      console.error(error);
      res.status(500).send(error.response);
    },
  );
};
