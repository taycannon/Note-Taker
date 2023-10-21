//API Route

// GET Route
router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });
  
  // POST Route
  router.post('/notes', (req, res) => {
    console.log(req.body);
  
    const { title, text} = req.body;
  
    if (req.body) {
      const newComment = {
        title,
        text,
        noteID:noteID(),
      };
  
      readAndAppend(newComment, './db/db.json');
      res.json(`Note added success`);
    } else {
      res.error('Error added new note');
    }
  });