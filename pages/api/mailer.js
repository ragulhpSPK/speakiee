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
    to: "ragulhp27@gmail.com",
    html: `<h1>Details of Client</h1> 
    <ul>
    <li>Email: ${req.body.email}</li>
    <li>Name:${req.body.name}</li>
    <li>Contact number:${req.body.number}</li>
    <li>Message:${req.body.message}</li>
    </ul>`,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
  res.send(200);
}
