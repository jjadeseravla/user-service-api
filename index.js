const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json([{
  name: 'Jade',
  email: 'ja@gmail.com'
}]))

app.listen(port, () => console.log(`listening on port ${port}!`))
