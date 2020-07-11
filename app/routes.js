var NotifyClient = require('notifications-node-client').NotifyClient,
    notify = new NotifyClient(process.env.NOTIFYAPIKEY);



const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line



// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/survey-prompt', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    'f4fb993e-e716-4397-acb6-a1a6f87b381d',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/survey-complete');

});



module.exports = router
