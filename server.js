const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/teste', (req,res) =>{
  const corpoDaReq = req.body

  console.log(corpoDaReq)

  res.send("essa rota é um teste")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})