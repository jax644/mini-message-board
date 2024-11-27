const { Router } = require('express')
const indexRouter = Router ()


const messages = [
    {
        text: 'Hi there!',
        user: 'Amanda',
        added: new Date()
    },
    {
        text: 'Hello world!',
        user: 'Charles',
        added: new Date()
    }
]

indexRouter.get('/', (req,res) => {
    res.render('index', { title: 'Mini message board', messages: messages })
})

indexRouter.get('/message/:index', (req,res) => {
    const message = messages[req.params.index]
    if (message) {
        res.render('message', {title: 'Message Details', message:message})
    } else {
        res.status(404).send('Message not found')
    }
})

indexRouter.post('/new', (req,res) => {
    const messageUser = req.body.user
    const messageText = req.body.text
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect('/')
})



module.exports = indexRouter