const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Welcome express service!!!')
})

app.get('/api', () => {
  res.send('API Documentation')
})

app.listen(3000, () => {
  console.log('App listening on port: 3000')
})
