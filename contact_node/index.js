const express = require('express')
const mongoose = require('mongoose')
const contact = require('./routes/contact.routes')
const cors = require('cors')

mongoose
  .connect('mongodb://localhost:27017/Contact_db', {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB is connected.'))
  .catch(err => console.log(err))

const app = express()
app.use(cors())
app.use(express.json())
app.use('/contact', contact)

app.listen(3200, () => console.log('--- Done ---'))
