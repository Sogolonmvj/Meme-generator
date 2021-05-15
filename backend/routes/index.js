var express = require('express');
var router = express.Router();

var dolly = require("../utils/dollypartonchallenge");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/generate', function (req, res, next) {

  const linkedin = req.files.linkedin.data;
  const facebook = req.files.facebook.data;
  const instagram = req.files.instagram.data;
  const tinder = req.files.tinder.data;

  // catch uploaded data req.files.[field].data
  // send images to dolly.generate
  // return the jason response
  dolly.generate(linkedin, facebook, instagram, tinder)
    .then(data => {
      return res.json(data);
    })
    .catch(error => {
      return res.json(error);
    });
})

module.exports = router;
