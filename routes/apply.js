var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('apply', { title: 'Apply'});
});

router.post('/send', (req,res, next)=>{
  var transporter = nodemailer.createTransport({
    service:'Gmail',
    auth: {
      user:'laalit.sunaar@gmail.com',
      pass:'pskojl-004001'
    }
  });

  var mailOptions = {
    form:"BlackBoard Notification <blackbaord@gmail.com>",
    to:"laalit.sunaar@gmail.com",
    subject:`new Submission recived from ${req.body.name}`,
    text:`You have recived submission of application from ${req.body.email} with following message: ${req.body.message}`,
    html:`<p>You got a new submission with the following details.</p>
    <ul>
      <li>name: ${req.body.name}</li>
      <li>email: ${req.body.email}</li>
      <li>name: ${req.body.message}</li>
    </ul>`
  };

  transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
      console.log(error);
      res.redirect('/');
    }
    else{
      console.log(`Message sent: ${info.response}`);
      res.redirect('/');
    }
  })
})

module.exports = router;
