const express = require('express')
const cors = require('cors')

const app = express()
const apiPort = 3001

app.use(cors())

app.get('/message', (req, res) => {
    res.send('Hello World! If you see this message, everything is ok. Enjoy!')
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))