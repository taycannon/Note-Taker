//HTML Route 2

//Importing path and router
const path = require('path')
const router = require('express').Router()

//Get request that is made to notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/notes.html'))
  });

  module.exports = router;