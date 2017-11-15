const app = require('express')();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
let comments = [
  { content: 'Great content!'},
  { content: 'Thanks for the post.'},
  { content: 'Very useful.'}
];

app.get('/', (req, res) => {
  res.render('./index.ejs', { comments })
});

app.post('/new-comment', urlencodedParser, (req, res) => {
  comments.push(req.body);
  res.redirect('/');
});

app.listen(5000, '0.0.0.0', () => {
  console.log('Listening on port 5000')
});