var express = require('express');
var cors = require('cors');
require('dotenv').config()
const multer  = require('multer')
const upload = multer({ storage: multer.memoryStorage() });

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('archivo'), function (req, res) {
  const archivo = req.file;

  if (!archivo) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  const fileInfo = {
    name: file.originalname,
    type: file.mimetype,
    size: file.size
  };
  res.json(fileInfo);
});





const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
