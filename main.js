const express = require('express')
const path = require('path')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'you-are-bot.zip')
    res.download(filePath, (err) => {
        if (err) {
            console.error('Ошибка при отправке файла:', err)
            res.status(500).send('Ошибка при загрузке файла')
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
