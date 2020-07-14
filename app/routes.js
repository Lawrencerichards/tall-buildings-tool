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
    'ba5f8102-bc15-4d4f-93a7-fa583d195598',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/survey-complete');

});




// Branching
router.post('/survey-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let isTallBuilding = req.session.data['building-height']

  if (isTallBuilding === 'no') {
    res.redirect('/survey-success')
  } else {
    res.redirect('/survey2-2')
  }
})



module.exports = router
