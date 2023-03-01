export default function (req, res) {
  console.log(req.body);
  let nodemailer = require("nodemailer");
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "ragulhp27@gmail.com",
      pass: "opdnauyfhutrrfzf",
    },
  });

  const mailData = {
    from: req.body.email,
    name: req.body.name,
    to: "ragulhp27@gmail.com",
    number: req.body.number,
    html: req.body.message,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
  res.send(200);
}
